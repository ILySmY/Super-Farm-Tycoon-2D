* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Fredoka', cursive, sans-serif;
    user-select: none;
}

body {
    background: linear-gradient(135deg, #74ebe5 0%, #4a90e2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.auth-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000;
}
.auth-card {
    background: white; border-radius: 20px; padding: 25px; width: 340px; text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
.auth-card h2 { color: #2e7d32; margin-bottom: 5px; }
.auth-card p { font-size: 12px; color: #64748b; margin-bottom: 15px; }
.auth-form input {
    width: 100%; padding: 10px 14px; margin-bottom: 10px; border: 2px solid #cbd5e1; border-radius: 10px; font-size: 13px; outline: none;
}
.auth-form input:focus { border-color: #4caf50; }
.auth-toggle { margin-top: 10px; font-size: 12px; color: #2563eb; cursor: pointer; text-decoration: underline; }
.btn-reset-all { margin-top: 12px; background: #ef4444; color: white; border: none; padding: 6px; border-radius: 8px; font-size: 11px; font-weight: bold; cursor: pointer; width: 100%; }

.game-wrapper {
    background: rgba(255, 255, 255, 0.98);
    width: 98vw;
    height: 96vh;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.game-wrapper.hidden, .auth-overlay.hidden { display: none !important; }

.weather-banner {
    background: #fff3cd; border: 2px solid #ffeba2; color: #856404;
    padding: 5px 14px; border-radius: 10px; font-weight: bold; text-align: center; font-size: 12px;
}

.top-bar {
    display: flex; justify-content: space-between; align-items: center;
    background: #f8fafc; padding: 8px 16px; border-radius: 14px; border: 2px solid #e2e8f0;
}

.profile-section { display: flex; align-items: center; gap: 10px; }
.level-badge { background: linear-gradient(45deg, #ff9a9e, #fecfef); color: #fff; font-weight: 700; padding: 4px 10px; border-radius: 10px; font-size: 12px; }

.user-info-section { display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: bold; color: #334155; }
.btn-logout { background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 6px; font-size: 10px; cursor: pointer; font-weight: bold; }
.btn-sync { background: #0284c7; color: white; border: none; padding: 4px 8px; border-radius: 6px; font-size: 10px; cursor: pointer; font-weight: bold; }

.exp-container { width: 140px; height: 14px; background: #e0e0e0; border-radius: 8px; position: relative; overflow: hidden; }
.exp-bar { height: 100%; width: 0%; background: #4caf50; transition: width 0.3s; }
#exp-text { position: absolute; width: 100%; text-align: center; font-size: 9px; line-height: 14px; font-weight: bold; color: #333; }

.currency-section { display: flex; gap: 8px; }
.stat-pill {
    background: #ffffff; border: 2px solid #cbd5e1; padding: 4px 10px; border-radius: 16px;
    font-weight: bold; font-size: 12px; display: flex; align-items: center; gap: 4px;
}

.main-layout { display: grid; grid-template-columns: 320px 1fr; gap: 12px; flex: 1; min-height: 0; }

.sidebar { background: #f8fafc; border-radius: 14px; padding: 10px; border: 2px solid #e2e8f0; display: flex; flex-direction: column; min-height: 0; }
.tab-nav { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; margin-bottom: 8px; flex-shrink: 0; }
.tab-btn { padding: 6px 2px; border: none; background: #e2e8f0; border-radius: 8px; font-size: 10px; font-weight: bold; cursor: pointer; color: #475569; }
.tab-btn.active { background: #4caf50; color: white; }
.tab-btn.highlight { background: #f59e0b; color: white; }

.tab-content { flex: 1; overflow-y: auto !important; padding-right: 4px; }
.tab-content.hidden { display: none; }

.crop-card, .inv-card, .animal-card, .quest-card {
    background: white; border: 2px solid #e2e8f0; border-radius: 10px;
    padding: 8px; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; cursor: pointer;
}
.crop-card.active { border-color: #4caf50; background: #f0fdf4; }
.crop-card.locked { opacity: 0.5; cursor: not-allowed; filter: grayscale(1); }

.quest-card { flex-direction: column; align-items: flex-start; gap: 4px; cursor: default; }
.quest-reward { font-size: 10px; font-weight: bold; color: #16a34a; }

.farm-area { background: #f1f5f9; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; gap: 10px; overflow-y: auto; }
.farm-header { display: flex; justify-content: space-between; align-items: center; }

.tools-bar { display: flex; gap: 6px; }
.btn-tool { border: 2px solid #94a3b8; background: white; padding: 4px 8px; border-radius: 8px; font-weight: bold; cursor: pointer; font-size: 10px; }
.btn-tool.active { background: #0284c7; color: white; border-color: #0284c7; }

.farm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: 8px; }
.plot {
    aspect-ratio: 1; background: #8d6e63; border: 2px solid #5d4037; border-radius: 10px;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    position: relative; cursor: pointer; box-shadow: inset 0 -3px 0 rgba(0,0,0,0.2);
}
.plot.watered { border-color: #0284c7; background: #6d4c41; }
.plot-emoji { font-size: 20px; }

.progress-wrap { position: absolute; bottom: 4px; width: 80%; height: 4px; background: rgba(0,0,0,0.3); border-radius: 2px; overflow: hidden; }
.progress-bar { height: 100%; width: 0%; background: #76ff03; }

.factory-zone, .animal-zone { background: #ffffff; padding: 8px; border-radius: 12px; border: 2px solid #e2e8f0; }
.factory-zone h3, .animal-zone h3 { font-size: 12px; color: #334155; margin-bottom: 6px; }

.factory-grid, .animal-grid { display: flex; gap: 8px; flex-wrap: wrap; max-height: 180px; overflow-y: auto !important; padding: 4px; }

.factory-item, .animal-plot {
    background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; padding: 6px 10px;
    display: flex; align-items: center; gap: 6px; font-size: 10px; font-weight: bold; cursor: pointer;
}

.btn-action { background: #ff9800; color: white; border: none; padding: 8px; border-radius: 10px; font-weight: bold; cursor: pointer; width: 100%; font-size: 11px; }
.sell-all-btn { background: #10b981; margin-top: 6px; }

.float-text {
    position: absolute; font-weight: bold; font-size: 14px; pointer-events: none;
    animation: floatUp 0.8s ease-out forwards; z-index: 100;
}
@keyframes floatUp { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-30px); } }
