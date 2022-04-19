var Eventinspector;
(function (Eventinspector) {
    window.addEventListener("load, handleLoad");
    function handleLoad(_event) {
        //*Event-Listener und Body key-up-Listener auf dem Body und den divs liegen
        var body = document.body;
        var div0 = document.getElementById("div0");
        var div0 = document.getElementById("div1");
        body.addEventListener("click, logInfo");
        div0.addEventListener("click, logInfo");
        div1.addEventListener("click, logInfo"),
            body.addEventListener("keyup, logInfo");
        div0.addEventListener("keyup, logInfo");
        div1.addEventListener("keyup, logInfo");
        document.addEventListener("click", logInfo);
        document.addEventListener("mosemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
    }
    function SetInfoBox(_event) {
        var x = _event.offsetX;
        var y = _event.offsetY;
        var target = _event.target;
        var span = document.getElementById("span");
        span.innerHTML = mouseposition + target;
        var mouseposition = "X: " + x + "px " + "Y: " + y + "px ";
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currenttTarget);
    }
})(Eventinspector || (Eventinspector = {}));
//# sourceMappingURL=Skript%20A%202-1.js.map