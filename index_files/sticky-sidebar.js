document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar'); // 使用ID选择器
    if (sidebar) { // 确保边栏元素存在
        new StickySidebar(sidebar, {
            topSpacing: 0,
            bottomSpacing: 0,
            containerSelector: '.row', // 确保这个选择器包含了边栏和主要内容区域
            innerWrapperSelector: null,
            resizeSensor: true,
            scroll: true
        });
    }
});