var Eventinspector;
(function (Eventinspector) {
    window.addEventListener("load", handleLoad);
    // tslint:disable-next-line: typedef
    function handleLoad(_event) {
        //*Event-Listener und Body key-up-Listener auf dem Body und den divs liegen
        // tslint:disable-next-line: typedef
        var body = document.body;
        // tslint:disable-next-line: typedef
        var div0 = document.getElementById("div0");
        // tslint:disable-next-line: typedef
        var div1 = document.getElementById("div1");
        body.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo),
            body.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("mosemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
    }
    // tslint:disable-next-line: typedef
    function setInfoBox(_event) {
        // tslint:disable-next-line: typedef
        var x = _event.offsetX;
        // tslint:disable-next-line: typedef
        var y = _event.offsetY;
        // tslint:disable-next-line: typedef
        var target = _event.target;
        // tslint:disable-next-line: typedef
        var span = document.getElementById("span");
        // tslint:disable-next-line: typedef
        var mousepos = "X: " + x + "px " + "Y: " + y + "px ";
        span.innerHTML = mousepos + target;
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    // tslint:disable-next-line: typedef
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currenttTarget);
    }
})(Eventinspector || (Eventinspector = {}));
//# sourceMappingURL=Skript%20A%202-1.js.map