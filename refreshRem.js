;(function() {

    var dpr, rem, scale,tid,doc;
    var ua = navigator.userAgent;
    
    var docEl = document.documentElement;
    doc = window.document;
    var metaElbefroe = document.querySelector('meta[name="viewport"]');



    dpr = window.devicePixelRatio || 1;
    scale = 1 / dpr;

    rem = docEl.clientWidth * dpr / 10;


    // 设置viewport，进行缩放，解决retaina屏幕一像素问题
    // metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale='
    // + scale + ',minimum-scale=' + scale + ',user-scalable=no');
    

    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl);
    } else {
        var wrap = doc.createElement('div');
        wrap.appendChild(metaEl);
        doc.write(wrap.innerHTML);
    }
   

    document.head.removeChild(metaElbefroe);


    // 设置data-dpr属性，适配字体大小用
    docEl.setAttribute('data-dpr', dpr);


    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
    }

    window.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    
    refreshRem();


})();
