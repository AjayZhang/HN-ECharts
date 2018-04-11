// JavaScript Document
//������Ӧ
//������Ӧ
var a, b;
var fontResize;
$(window).ready(function() {

    remResize()
});
$(window).resize(function() {

    remResize()
})

function remResize() {
    a = $(window).innerWidth();
    $('.bord').css('width', a + 'px');
    // b = $(window).innerHeight();
    // $('.bord').css('height', b + 'px');
    //����Ӧ
    +
        function(d, w) {
            var WIDTH_TO_REM = 115;
            var HEIGHT_TO_REM = 90;
            var i = d.documentElement,
                s = function() {
                    var t = i.clientWidth;
                    var h = i.clientHeight;
                   //console.log(t + ' *W* ' + t / WIDTH_TO_REM);
                   // console.log(h + ' *H* ' + t / HEIGHT_TO_REM);
                    //if(t / h < 2800 / 700) {
                    //} else {
                    t && (i.style.fontSize = (t / WIDTH_TO_REM) + "px");
                    //  h && (i.style.fontSize = (h / HEIGHT_TO_REM) + "px");
                    //}
                    fontResize=i.style.fontSize
                    console.log(fontResize)

                };
            s();

            //				if(d.addEventListener) {
            //					d.addEventListener("DOMContentLoaded", s, false);
            //					w.addEventListener("resize", s, false);
            //					w.addEventListener("orientationchange", s, false);
            //				} else {
            //					d.attachEvent("onDOMContentLoaded", s);
            //					w.attachEvent("onresize", s);
            //					w.attachEvent("onorientationchange", s);
            //				}
        }(document, window);

}
function getRemSize(size){
    var rtn=fontResize.replace("px","")*size/12
    return rtn
}
