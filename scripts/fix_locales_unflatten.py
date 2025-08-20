#!/usr/bin/env python3
import json, os, sys, copy

path = "locales/en.default.json"
if not os.path.exists(path):
    print("Fout:", path, "bestaat niet. Stop.")
    sys.exit(1)

# backup (timestamped)
bak = path + ".bak"
i = 0
while os.path.exists(bak + ("" if i==0 else f".{i}")):
    i += 1
bak = bak if i==0 else bak + f".{i}"
os.rename(path, bak)
print("Backup verplaatst naar:", bak)

# laad originele
with open(bak, "r", encoding="utf-8") as f:
    try:
        data = json.load(f)
    except Exception as e:
        print("Kon JSON niet laden:", e)
        print("Backup staat in", bak, " — controleer handmatig.")
        sys.exit(2)

def deep_merge(a, b):
    # merge b into a (both dicts)
    for k, v in b.items():
        if k in a and isinstance(a[k], dict) and isinstance(v, dict):
            deep_merge(a[k], v)
        else:
            a[k] = v

def set_nested(d, keys, value):
    cur = d
    for k in keys[:-1]:
        if k not in cur or not isinstance(cur[k], dict):
            cur[k] = {}
        cur = cur[k]
    cur[keys[-1]] = value

# construct new dict with dotted keys unflattened
new = {}

for k, v in data.items():
    if "." in k:
        parts = k.split(".")
        # if value is dict, might contain nested dotted keys; keep as is (but will be merged)
        # set nested structure
        temp = {}
        set_nested(temp, parts, v)
        deep_merge(new, temp)
    else:
        # ensure value's internal dotted keys also handled if value is dict
        if isinstance(v, dict):
            # simple recursion: walk child keys and if they contain dots, convert
            def process_obj(obj):
                out={}
                for kk, vv in obj.items():
                    if "." in kk:
                        ps = kk.split(".")
                        tmp={}
                        set_nested(tmp, ps, vv)
                        deep_merge(out, tmp)
                    else:
                        if isinstance(vv, dict):
                            out[kk] = process_obj(vv)
                        else:
                            out[kk] = vv
                return out
            processed = process_obj(v)
            if k in new and isinstance(new[k], dict):
                deep_merge(new[k], processed)
            else:
                new[k] = processed
        else:
            if k in new and isinstance(new[k], dict):
                # collision: existing is dict, new is non-dict -> overwrite
                new[k] = v
            else:
                new[k] = v

# write pretty JSON back
with open(path, "w", encoding="utf-8") as f:
    json.dump(new, f, indent=2, ensure_ascii=False)
print("Wegschrijven voltooid:", path)
print("Oude bestand staat als:", bak)
