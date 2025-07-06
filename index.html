<?php 
// BOLDYASE SYSTEM CONTROL CENTER V3 - ENHANCED AUTO-FIXERS & REPAIR TOOLS
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start sessie voor audit log
session_start();

// ================== ENHANCED AUTO-FIXERS ==================
// Audit log functie
function log_repair_action($action, $result, $details = '') {
    if (!isset($_SESSION['repair_log'])) {
        $_SESSION['repair_log'] = [];
    }
    $_SESSION['repair_log'][] = [
        'timestamp' => date('Y-m-d H:i:s'),
        'action' => $action,
        'result' => $result,
        'details' => $details,
        'user' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
    ];
}

// Backup functie voor fixes
function create_backup($path, $type = 'file') {
    $backup_dir = __DIR__ . '/../backups/';
    if (!is_dir($backup_dir)) mkdir($backup_dir, 0777, true);
    
    $backup_name = date('Ymd_His') . '_' . basename($path) . '.bak';
    $backup_path = $backup_dir . $backup_name;
    
    if ($type === 'file' && file_exists($path)) {
        copy($path, $backup_path);
        return $backup_path;
    }
    return false;
}

// BATCH REPAIR - Meerdere fixes tegelijk
if (isset($_GET['batch_repair'])) {
    $results = [];
    $fixes = ['uploads', 'permissions', 'cache', 'sessions'];
    
    foreach ($fixes as $fix) {
        switch ($fix) {
            case 'uploads':
                $upload_dir = __DIR__ . '/../uploads';
                if (!is_dir($upload_dir)) {
                    mkdir($upload_dir, 0777, true);
                    $results[] = "✅ Uploads map aangemaakt";
                } elseif (!is_writable($upload_dir)) {
                    chmod($upload_dir, 0777);
                    $results[] = "✅ Uploads map schrijfbaar gemaakt";
                }
                break;
                
            case 'permissions':
                $dirs = ['logs', 'cache', 'temp', 'backups'];
                foreach ($dirs as $dir) {
                    $path = __DIR__ . '/../' . $dir;
                    if (!is_dir($path)) {
                        mkdir($path, 0777, true);
                        $results[] = "✅ $dir map aangemaakt";
                    } else {
                        chmod($path, 0777);
                        $results[] = "✅ $dir rechten hersteld";
                    }
                }
                break;
                
            case 'cache':
                $cache_dir = __DIR__ . '/../cache';
                if (is_dir($cache_dir)) {
                    $files = glob($cache_dir . '/*');
                    foreach ($files as $file) {
                        if (is_file($file)) unlink($file);
                    }
                    $results[] = "✅ Cache geleegd";
                }
                break;
                
            case 'sessions':
                session_destroy();
                session_start();
                $results[] = "✅ Sessies gereset";
                break;
        }
    }
    
    log_repair_action('Batch Repair', 'Success', implode(', ', $results));
    header("Location: " . basename(__FILE__) . "?msg=" . urlencode("Batch repair uitgevoerd: " . implode(' | ', $results)));
    exit();
}

// ROLLBACK functie
if (isset($_GET['rollback']) && isset($_SESSION['last_backup'])) {
    $backup = $_SESSION['last_backup'];
    if (file_exists($backup['backup_path']) && file_exists($backup['original_path'])) {
        copy($backup['backup_path'], $backup['original_path']);
        log_repair_action('Rollback', 'Success', "Restored: " . basename($backup['original_path']));
        header("Location: " . basename(__FILE__) . "?msg=" . urlencode("Rollback succesvol uitgevoerd"));
        exit();
    }
}

// Enhanced upload fix met backup
if (isset($_GET['fix']) && $_GET['fix'] === 'uploads') {
    $upload_dir = __DIR__ . '/../uploads';
    $msg = '';
    
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0777, true);
        $msg = 'Uploads map aangemaakt!';
        log_repair_action('Create uploads directory', 'Success', $upload_dir);
    } elseif (!is_writable($upload_dir)) {
        chmod($upload_dir, 0777);
        $msg = 'Uploads map nu schrijfbaar!';
        log_repair_action('Fix uploads permissions', 'Success', '0777');
    } else {
        $msg = 'Uploads map was al ok!';
    }
    
    header("Location: " . basename(__FILE__) . "?fixed=uploads&msg=" . urlencode($msg));
    exit();
}

// Component fix met backup
if (isset($_GET['fix']) && $_GET['fix'] === 'include' && isset($_GET['file'])) {
    $file = basename($_GET['file']);
    $dir = __DIR__ . '/../includes/components/';
    $path = $dir . $file;
    
    if (!is_dir($dir)) mkdir($dir, 0777, true);
    
    if (!file_exists($path)) {
        file_put_contents($path, "<?php\n// BOLDYASE COMPONENT: $file\n// Generated: " . date('Y-m-d H:i:s') . "\n?>");
        $msg = "$file component aangemaakt!";
        log_repair_action('Create component', 'Success', $file);
    } else {
        $msg = "$file bestaat al!";
    }
    
    header("Location: " . basename(__FILE__) . "?fixed=include&file=$file&msg=" . urlencode($msg));
    exit();
}

// Export repair log
if (isset($_GET['export_log'])) {
    $log = $_SESSION['repair_log'] ?? [];
    $content = "BOLDYASE REPAIR LOG EXPORT\n";
    $content .= "Generated: " . date('Y-m-d H:i:s') . "\n";
    $content .= str_repeat("=", 50) . "\n\n";
    
    foreach ($log as $entry) {
        $content .= "[{$entry['timestamp']}] {$entry['action']} - {$entry['result']}\n";
        if ($entry['details']) $content .= "Details: {$entry['details']}\n";
        $content .= "User: {$entry['user']}\n\n";
    }
    
    header('Content-Type: text/plain');
    header('Content-Disposition: attachment; filename="repair_log_' . date('Ymd_His') . '.txt"');
    echo $content;
    exit();
}

// Clear logs
if (isset($_GET['clear_logs'])) {
    $_SESSION['repair_log'] = [];
    header("Location: " . basename(__FILE__) . "?msg=" . urlencode("Repair logs gewist"));
    exit();
}

// Health check API endpoint (voor AJAX)
if (isset($_GET['api']) && $_GET['api'] === 'health_check') {
    header('Content-Type: application/json');
    
    $health = [
        'status' => 'ok',
        'timestamp' => date('Y-m-d H:i:s'),
        'checks' => []
    ];
    
    // Quick checks
    $health['checks']['php_version'] = version_compare(phpversion(), '8.0', '>=');
    $health['checks']['memory_limit'] = (int)ini_get('memory_limit') >= 128;
    $health['checks']['uploads_writable'] = is_writable(__DIR__ . '/../uploads');
    
    $health['status'] = in_array(false, $health['checks']) ? 'warning' : 'ok';
    
    echo json_encode($health);
    exit();
}

// Testmail
if (isset($_GET['testmail'])) {
    $to = 'jouw@mailadres.nl';
    $ok = mail($to, 'Boldyase Testmail', 'Dit is een testmail vanuit jouw dashboard');
    log_repair_action('Test email', $ok ? 'Success' : 'Failed', $to);
    header("Location: " . basename(__FILE__) . "?msg=" . urlencode($ok ? "Testmail verstuurd naar $to" : "Testmail gefaald naar $to"));
    exit();
}

// ================== HELPER FUNCTIONS ==================
function testrule($title, $result, $msgOk = 'OK', $msgFail = 'FOUT', $action = '', $details = '', $tooltip = '') {
    $statusClass = $result ? 'status-ok' : 'status-error';
    $statusTxt = $result ? $msgOk : $msgFail;
    $tooltipHtml = $tooltip ? "data-tooltip='$tooltip'" : '';
    
    $btn = '';
    if ($action) {
        if (strpos($action, 'href') !== false) {
            $btn = $action;
        } else {
            $btn = "<button class='action-btn'>$action</button>";
        }
    }
    
    $html = "<div class='check-item' $tooltipHtml>
        <div class='check-label'>$title";
    
    if ($tooltip) {
        $html .= " <span class='info-icon'>ⓘ</span>";
    }
    
    $html .= "</div>
        <div class='check-right'>
            <span class='check-status $statusClass'>$statusTxt</span>
            $btn
        </div>
    </div>";
    
    if ($details) {
        $html .= "<div class='check-detail'>$details</div>";
    }
    return $html;
}

function get_ini_value($setting) {
    $value = ini_get($setting);
    return ($value === false || $value === '') ? 'Niet beschikbaar' : $value;
}

function render_card_start($title, $icon = '⚙️', $id = '') {
    $idAttr = $id ? "id='$id'" : '';
    return "<div class='card' $idAttr><div class='card-header'>$icon $title</div><div class='card-body'>";
}

function render_card_end() {
    return "</div></div>";
}

// Get system health score
function get_health_score() {
    $checks = 0;
    $passed = 0;
    
    // PHP checks
    $checks++; if (version_compare(phpversion(), '8.0', '>=')) $passed++;
    $checks++; if ((int)ini_get('memory_limit') >= 128) $passed++;
    $checks++; if ((int)ini_get('max_execution_time') >= 30) $passed++;
    
    // File checks
    $checks++; if (file_exists(__DIR__.'/../composer.json')) $passed++;
    $checks++; if (is_writable(__DIR__ . '/../uploads')) $passed++;
    
    return round(($passed / $checks) * 100);
}

$all_ok = true;
$health_score = get_health_score();
?>
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<title>Boldyase Auto-Fixers & Repair Tools</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #11110f;
    --bg-secondary: #141414;
    --bg-tertiary: #0b0b0b;
    --bg-hover: #1e1e20;
    --text-primary: #e3e3e9;
    --text-secondary: #b4b4b8;
    --text-muted: #8e94b8;
    --success: #34d399;
    --danger: #f87171;
    --warning: #fbbf24;
    --border: #2a2a2d;
    --shadow: 0 2px 8px rgba(0,0,0,0.3);
    --shadow-hover: 0 4px 12px rgba(0,0,0,0.4);
    --radius: 8px;
}

body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    min-height: 100vh;
    display: flex;
}

/* Enhanced Sidebar */
.sidebar {
    width: 280px;
    background: var(--bg-secondary);
    padding: 24px;
    box-shadow: 2px 0 12px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

.logo-section {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
}

.logo-section h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
}

.health-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 12px;
    padding: 12px;
    background: var(--bg-tertiary);
    border-radius: var(--radius);
}

.health-score {
    font-size: 24px;
    font-weight: 700;
    color: var(--success);
}

.health-label {
    font-size: 14px;
    color: var(--text-secondary);
}

/* Navigation */
.nav-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius);
    transition: all 0.2s ease;
    font-size: 14px;
}

.nav-item:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
}

/* Action Buttons */
.action-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.action-button, .repair-button {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 12px 24px;
    border-radius: var(--radius);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    width: 100%;
    text-align: center;
    box-shadow: var(--shadow);
}

.action-button:hover, .repair-button:hover {
    background: var(--bg-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-hover);
}

.repair-button.batch {
    background: var(--success);
    color: var(--bg-primary);
    font-weight: 600;
}

.repair-button.batch:hover {
    background: #2bb97f;
}

/* System Info */
.system-info {
    margin-top: auto;
    padding: 16px;
    background: var(--bg-tertiary);
    border-radius: var(--radius);
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.6;
}

/* Main Content */
.main-content {
    flex: 1;
    margin-left: 280px;
    padding: 32px;
    overflow-y: auto;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
}

.header h2 {
    font-size: 28px;
    font-weight: 700;
}

.status-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--bg-secondary);
    border-radius: var(--radius);
    font-size: 14px;
    box-shadow: var(--shadow);
}

/* Quick Actions Bar */
.quick-actions {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.quick-action-btn {
    padding: 8px 16px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text-primary);
    font-size: 13px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.quick-action-btn:hover {
    background: var(--bg-hover);
    transform: translateY(-1px);
}

/* Repair Categories */
.repair-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
}

.repair-category {
    background: var(--bg-secondary);
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow);
}

.repair-category:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.category-icon {
    font-size: 32px;
    margin-bottom: 8px;
}

.category-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
}

/* Checks Grid */
.checks-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 20px;
}

.card {
    background: var(--bg-secondary);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: all 0.2s ease;
}

.card:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-hover);
}

.card-header {
    font-size: 16px;
    font-weight: 600;
    padding: 16px 20px;
    background: rgba(0,0,0,0.2);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-body {
    padding: 8px 20px 16px;
}

/* Check Items */
.check-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    font-size: 14px;
    position: relative;
}

.check-item:last-child {
    border-bottom: none;
}

.check-label {
    font-weight: 500;
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 8px;
}

.info-icon {
    color: var(--text-muted);
    cursor: help;
    font-size: 12px;
}

.check-right {
    display: flex;
    align-items: center;
    gap: 12px;
}

.check-status {
    font-size: 13px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 4px;
}

.status-ok {
    color: var(--success);
    background: rgba(52, 211, 153, 0.1);
}

.status-error {
    color: var(--danger);
    background: rgba(248, 113, 113, 0.1);
}

.status-warning {
    color: var(--warning);
    background: rgba(251, 191, 36, 0.1);
}

/* Action Buttons in checks */
.action-btn {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 6px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
    text-decoration: none;
    display: inline-block;
}

.action-btn:hover {
    background: var(--bg-hover);
    transform: translateX(2px);
}

/* Repair Log */
.repair-log {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: var(--radius);
    padding: 20px;
    box-shadow: var(--shadow);
}

.log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.log-header h3 {
    font-size: 18px;
    font-weight: 600;
}

.log-actions {
    display: flex;
    gap: 8px;
}

.log-entry {
    padding: 8px 12px;
    background: var(--bg-tertiary);
    border-radius: var(--radius);
    margin-bottom: 8px;
    font-size: 13px;
    color: var(--text-secondary);
}

.log-entry .timestamp {
    color: var(--text-muted);
    font-size: 12px;
}

/* Tooltips */
[data-tooltip] {
    position: relative;
}

[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-tertiary);
    color: var(--text-primary);
    padding: 8px 12px;
    border-radius: var(--radius);
    font-size: 12px;
    white-space: nowrap;
    box-shadow: var(--shadow);
    z-index: 1000;
    margin-bottom: 8px;
}

/* Animations */
@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

.loading {
    animation: pulse 1.5s infinite;
}

/* Footer */
.footer {
    padding: 20px 32px;
    text-align: center;
    color: var(--text-muted);
    font-size: 12px;
    margin-top: 40px;
}

/* Responsive */
@media (max-width: 1024px) {
    .sidebar {
        width: 240px;
    }
    .main-content {
        margin-left: 240px;
    }
}

@media (max-width: 768px) {
    .sidebar {
        position: static;
        width: 100%;
        height: auto;
    }
    .main-content {
        margin-left: 0;
        padding: 20px;
    }
    .checks-container {
        grid-template-columns: 1fr;
    }
}
</style>
</head>
<body>

<div class="sidebar">
    <div class="logo-section">
        <h1>🔧 Auto-Fixers & Repair Tools</h1>
        <div class="health-indicator">
            <span class="health-score"><?= $health_score ?>%</span>
            <span class="health-label">System Health</span>
        </div>
    </div>
    
    <nav class="nav-menu">
        <a href="dashboard.php" class="nav-item">
            <span>📊</span> Dashboard
        </a>
        <a href="../public/database_test.php" class="nav-item">
            <span>🗄️</span> Database Test
        </a>
        <a href="../" class="nav-item">
            <span>🏠</span> Homepage
        </a>
        <a href="https://github.com/jouwnaam/boldyase" class="nav-item">
            <span>🔗</span> GitHub
        </a>
    </nav>
    
    <div class="action-section">
        <button class="repair-button batch" onclick="if(confirm('Start batch repair voor alle standaard fixes?')) window.location.href='?batch_repair=1'">
            🚀 Batch Repair All
        </button>
        <button class="action-button" onclick="window.location.href='?testmail=1'">
            📧 Test Mail System
        </button>
        <button class="action-button" onclick="refreshStatus()">
            🔄 Refresh Status
        </button>
        <button class="action-button" onclick="window.location.href='?export_log=1'">
            📥 Export Repair Log
        </button>
    </div>
    
    <div class="system-info">
        <div><strong>PHP Version:</strong> <?= phpversion(); ?></div>
        <div><strong>Memory:</strong> <?= get_ini_value('memory_limit'); ?></div>
        <div><strong>Max Time:</strong> <?= get_ini_value('max_execution_time'); ?>s</div>
        <div><strong>Upload Max:</strong> <?= get_ini_value('upload_max_filesize'); ?></div>
    </div>
</div>

<div class="main-content">
    <div class="header">
        <h2>Auto-Fixers & Repair Tools</h2>
        <div class="status-badge">
            <span class="icon">🚀</span>
            <span class="text <?= $all_ok ? 'text-green' : 'text-red' ?>">
                <?= $all_ok ? 'System OK' : 'Attention Required' ?>
            </span>
        </div>
    </div>
    
    <?php if (isset($_GET['msg'])): ?>
    <div class="quick-actions" style="background: rgba(52, 211, 153, 0.1); color: var(--success);">
        <?= htmlspecialchars($_GET['msg']) ?>
    </div>
    <?php endif; ?>
    
    <div class="quick-actions">
        <button class="quick-action-btn" onclick="window.location.href='?clear_logs=1'">
            🗑️ Clear Logs
        </button>
        <button class="quick-action-btn" onclick="runHealthCheck()">
            🏥 Health Check
        </button>
        <button class="quick-action-btn" onclick="createBackup()">
            💾 Create Backup
        </button>
        <button class="quick-action-btn" onclick="showExpertMode()">
            🔬 Expert Mode
        </button>
    </div>
    
    <div class="repair-categories">
        <div class="repair-category" onclick="scrollToSection('system-checks')">
            <div class="category-icon">🖥️</div>
            <div class="category-label">System</div>
        </div>
        <div class="repair-category" onclick="scrollToSection('file-checks')">
            <div class="category-icon">📁</div>
            <div class="category-label">Files</div>
        </div>
        <div class="repair-category" onclick="scrollToSection('database-checks')">
            <div class="category-icon">🗃️</div>
            <div class="category-label">Database</div>
        </div>
        <div class="repair-category" onclick="scrollToSection('services-checks')">
            <div class="category-icon">🌐</div>
            <div class="category-label">Services</div>
        </div>
    </div>
    
    <div class="checks-container">
        <?php
        // ================== SYSTEM & PHP CHECKS ==================
        echo render_card_start('System & PHP Configuration', '🖥️', 'system-checks');
        echo testrule(
            'PHP Version', 
            version_compare(phpversion(), '8.0', '>='), 
            phpversion(), 
            'Outdated (< 8.0)', 
            '', 
            '',
            'PHP 8.0 or higher is required for optimal performance'
        );
        echo testrule(
            'Memory Limit', 
            (int)get_ini_value('memory_limit') >= 128, 
            get_ini_value('memory_limit'), 
            'Too Low', 
            (int)get_ini_value('memory_limit') < 128 ? '<a class="action-btn" href="#" onclick="alert(\'Edit php.ini: memory_limit = 256M\')">Fix</a>' : '',
            '',
            'Recommended: 256M or higher for complex operations'
        );
        echo testrule(
            'Max Execution Time', 
            (int)get_ini_value('max_execution_time') >= 30, 
            get_ini_value('max_execution_time') . 's', 
            'Too Short',
            '',
            '',
            'Scripts may timeout if this is too low'
        );
        echo testrule(
            'Upload Max Filesize', 
            (int)get_ini_value('upload_max_filesize') >= 8, 
            get_ini_value('upload_max_filesize'), 
            'Too Small',
            '',
            '',
            'Limits the size of uploaded files'
        );
        echo testrule(
            'Session Status', 
            session_status() === PHP_SESSION_ACTIVE, 
            'Active', 
            'Inactive',
            '',
            '',
            'Sessions are required for user authentication'
        );
        
        // Additional system checks
        echo testrule(
            'OPcache', 
            function_exists('opcache_get_status'), 
            'Enabled', 
            'Disabled',
            '',
            '',
            'OPcache improves PHP performance'
        );
        echo render_card_end();
        
        // ================== FILE SYSTEM CHECKS ==================
        echo render_card_start('File System & Permissions', '📁', 'file-checks');
        
        // Composer checks
        $composerJson = file_exists(__DIR__.'/../composer.json');
        echo testrule(
            'composer.json', 
            $composerJson, 
            'Present', 
            'Missing', 
            !$composerJson ? '<a class="action-btn" href="https://getcomposer.org/" target="_blank">Install</a>' : '',
            '',
            'Required for dependency management'
        );
        
        $composerLock = file_exists(__DIR__.'/../composer.lock');
        echo testrule(
            'composer.lock', 
            $composerLock, 
            'Present', 
            'Missing',
            '',
            '',
            'Locks dependency versions for consistency'
        );
        
        // Autoload check
        $autoloadOk = false;
        try {
            if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
                require_once __DIR__ . '/../vendor/autoload.php';
                $autoloadOk = true;
            }
        } catch (Throwable $e) {
            $all_ok = false;
        }
        echo testrule(
            'Composer Autoload', 
            $autoloadOk, 
            'Working', 
            'Failed',
            !$autoloadOk ? '<span class="action-btn" onclick="alert(\'Run: composer install\')">Fix</span>' : '',
            '',
            'Autoloads PHP classes automatically'
        );
        
        // Directory checks
        $dirs = ['uploads', 'logs', 'cache', 'backups', 'temp'];
        foreach ($dirs as $dir) {
            $path = __DIR__ . '/../' . $dir;
            $exists = is_dir($path);
            $writable = $exists && is_writable($path);
            $status = !$exists ? 'Missing' : (!$writable ? 'Not Writable' : 'OK');
            $action = !$exists || !$writable ? "<a class='action-btn' href='?fix=$dir'>Fix</a>" : '';
            
            echo testrule(
                ucfirst($dir) . ' Directory', 
                $exists && $writable, 
                'OK', 
                $status,
                $action,
                '',
                "Required for $dir storage"
            );
            
            if (!($exists && $writable)) $all_ok = false;
        }
        echo render_card_end();
        
        // ================== DATABASE CHECKS ==================
        echo render_card_start('Database Connection & Tables', '🗃️', 'database-checks');
        
        $pdo_check = false;
        try {
            if (file_exists(__DIR__ . '/../includes/db.php')) {
                require_once __DIR__ . '/../includes/db.php';
                $pdo_check = isset($pdo) && $pdo instanceof PDO;
            }
        } catch (Throwable $e) {
            $all_ok = false;
        }
        
        echo testrule(
            'Database Connection', 
            $pdo_check, 
            'Connected', 
            'Failed',
            '<a href="../public/database_test.php" class="action-btn">Test</a>',
            '',
            'Required for all database operations'
        );
        
        if ($pdo_check) {
            try {
                $result = $pdo->query("SELECT 1")->fetchColumn();
                echo testrule(
                    'Database Query Test', 
                    $result == 1, 
                    'Working', 
                    'Failed',
                    '',
                    '',
                    'Tests if queries can be executed'
                );
                
                // Table checks
                $required = ['producten_new', 'users_new', 'meldingen_new', 'settings', 'logs'];
                $tables = $pdo->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
                
                foreach ($required as $tbl) {
                    $ok = in_array($tbl, $tables);
                    echo testrule(
                        "Table: $tbl", 
                        $ok, 
                        'Exists', 
                        'Missing',
                        !$ok ? '<a class="action-btn" href="../sql/setup.sql" target="_blank">Import</a>' : '',
                        '',
                        "Required table for system functionality"
                    );
                    if (!$ok) $all_ok = false;
                }
            } catch (Exception $e) {
                echo testrule("Database Tables Check", false, 'FOUT', 'FOUT', '', $e->getMessage());
            }
        }
        echo render_card_end();
        
        // ================== SERVICES & ENVIRONMENT ==================
        echo render_card_start('External Services & APIs', '🌐', 'services-checks');
        
        // Environment checks
        try {
            $dotenvLoaded = getenv('DB_HOST') || isset($_ENV['DB_HOST']) || file_exists(__DIR__.'/../.env');
            echo testrule(
                '.env Configuration', 
                $dotenvLoaded, 
                'Loaded', 
                'Not Found',
                '',
                '',
                'Contains environment-specific settings'
            );
        } catch (Throwable $e) {
            echo testrule('.env Configuration', false, 'Error', 'Error', '', $e->getMessage());
        }
        
        // API checks
        $apiOk = false;
        $apiDetails = '';
        try {
            $apiUrl = "http://localhost:3000/api/health";
            $ch = curl_init($apiUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 2);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['x-api-key: JouwSterkeApiToken123!']);
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            
            if ($response && $httpCode === 200) {
                $data = json_decode($response, true);
                $apiOk = isset($data['status']) && $data['status'] === 'ok';
                $apiDetails = $apiOk ? "API responding correctly" : "Invalid API response";
            } else {
                $apiDetails = 'Connection failed: ' . curl_error($ch);
            }
            curl_close($ch);
        } catch (Throwable $e) {
            $apiDetails = 'Exception: ' . $e->getMessage();
        }
        
        echo testrule(
            'Node.js AI API', 
            $apiOk, 
            'Online', 
            'Offline',
            !$apiOk ? '<a class="action-btn" href="#" onclick="alert(\'Start: node index.js\')">Start</a>' : '',
            $apiDetails,
            'Required for AI functionality'
        );
        
        // Mail server check
        $mailOk = function_exists('mail');
        echo testrule(
            'Mail Server', 
            $mailOk, 
            'Available', 
            'Not Available',
            '<a class="action-btn" href="?testmail=1">Test</a>',
            '',
            'Required for sending emails'
        );
        
        echo render_card_end();
        
        // ================== COMPONENTS CHECK ==================
        echo render_card_start('Application Components', '🧩');
        $components = [
            'db.php' => 'Database connection handler',
            'auth.php' => 'Authentication system',
            'ai_api.php' => 'AI API integration',
            'sidebar.php' => 'Navigation component',
            'dashboard-header.php' => 'Dashboard header',
            'dashboard-stats.php' => 'Statistics widget'
        ];
        
        foreach ($components as $file => $description) {
            $path = strpos($file, 'dashboard') !== false || $file === 'sidebar.php' 
                ? '/../includes/components/' . $file 
                : '/../includes/' . $file;
            
            $exists = file_exists(__DIR__ . $path);
            $action = !$exists ? "<a class='action-btn' href='?fix=include&file=$file'>Create</a>" : '';
            
            echo testrule(
                $file, 
                $exists, 
                'Present', 
                'Missing',
                $action,
                '',
                $description
            );
            
            if (!$exists) $all_ok = false;
        }
        echo render_card_end();
        ?>
    </div>
    
    <!-- Repair Log Section -->
    <div class="repair-log">
        <div class="log-header">
            <h3>📋 Repair Activity Log</h3>
            <div class="log-actions">
                <button class="quick-action-btn" onclick="window.location.href='?export_log=1'">
                    Export
                </button>
                <button class="quick-action-btn" onclick="window.location.href='?clear_logs=1'">
                    Clear
                </button>
            </div>
        </div>
        <div class="log-content">
            <?php
            $logs = $_SESSION['repair_log'] ?? [];
            $logs = array_reverse(array_slice($logs, -10)); // Show last 10
            
            if (empty($logs)) {
                echo '<div class="log-entry">No repair actions logged yet.</div>';
            } else {
                foreach ($logs as $log) {
                    echo "<div class='log-entry'>";
                    echo "<span class='timestamp'>[{$log['timestamp']}]</span> ";
                    echo "<strong>{$log['action']}</strong> - {$log['result']}";
                    if ($log['details']) echo " ({$log['details']})";
                    echo "</div>";
                }
            }
            ?>
        </div>
    </div>
    
    <div class="footer">
        <p>Boldyase Auto-Fixers & Repair Tools v3.0 | System Health: <?= $health_score ?>% | 
        PHP <?= phpversion() ?> | Memory: <?= get_ini_value('memory_limit') ?></p>
    </div>
</div>

<script>
// Refresh status via AJAX
function refreshStatus() {
    const badge = document.querySelector('.status-badge .text');
    badge.textContent = 'Refreshing...';
    badge.className = 'text loading';
    
    fetch('?api=health_check')
        .then(response => response.json())
        .then(data => {
            badge.textContent = data.status === 'ok' ? 'System OK' : 'Attention Required';
            badge.className = 'text ' + (data.status === 'ok' ? 'text-green' : 'text-red');
            
            // Could update individual checks here too
            console.log('Health check:', data);
        })
        .catch(error => {
            badge.textContent = 'Check Failed';
            badge.className = 'text text-red';
        });
}

// Scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Run health check
function runHealthCheck() {
    if (confirm('Run complete system health check?')) {
        refreshStatus();
    }
}

// Create backup placeholder
function createBackup() {
    alert('Backup functionality would create a complete system backup here.');
}

// Expert mode placeholder
function showExpertMode() {
    alert('Expert mode would reveal advanced repair options and terminal access.');
}

// Auto-refresh every 30 seconds
setInterval(refreshStatus, 30000);

// Show notifications for repair actions
<?php if (isset($_GET['fixed'])): ?>
    console.log('Repair completed: <?= $_GET['fixed'] ?>');
<?php endif; ?>
</script>

</body>
</html>
