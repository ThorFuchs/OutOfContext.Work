// Sidebar resize functionality
(function() {
    const sidebar = document.getElementById('sidebar');
    const resizeHandle = document.getElementById('sidebar-resize-handle');
    const contentWrapper = document.getElementById('content-wrapper');
    
    if (!sidebar || !resizeHandle || !contentWrapper) return;
    
    let isResizing = false;
    let startX = 0;
    let startWidth = 0;
    
    // Load saved width
    const savedWidth = localStorage.getItem('sidebar-width');
    if (savedWidth) {
        sidebar.style.width = savedWidth + 'px';
        document.documentElement.style.setProperty('--sidebar-width', savedWidth + 'px');
    }
    
    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startWidth = sidebar.offsetWidth;
        
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        
        const width = startWidth + (e.clientX - startX);
        const minWidth = 200;
        const maxWidth = 500;
        
        if (width >= minWidth && width <= maxWidth) {
            sidebar.style.width = width + 'px';
            document.documentElement.style.setProperty('--sidebar-width', width + 'px');
        }
    });
    
    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            
            // Save width
            localStorage.setItem('sidebar-width', sidebar.offsetWidth);
        }
    });
})();