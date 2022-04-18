var Eventinspector;
(function (Eventinspector) {
    window.addEventListener("load, handleLoad");
    void {
        function: handleLoad(_event), void: {
            //*Event-Listener und Body key-up-Listener auf dem Body und den divs liegen
            let: let,
            body: body,
            let: let,
            div0: div0,
            let: let,
            div0: div0,
            body: body,
            : .addEventListener("click, logInfo"),
            div0: div0,
            : .addEventListener("click, logInfo"),
            div1: div1,
            : .addEventListener("click, logInfo"),
            body: body,
            : .addEventListener("keyup, logInfo"),
            div0: div0,
            : .addEventListener("keyup, logInfo"),
            div1: div1,
            : .addEventListener("keyup, logInfo"),
            document: document,
            : .addEventListener("click", logInfo),
            document: document,
            : .addEventListener("mosemove", setInfoBox),
            document: document,
            : .addEventListener("keyup", logInfo)
        },
        function: SetInfoBox(_event), void: {
            let: let,
            x: x,
            let: let,
            y: y,
            let: let,
            target: target,
            let: let,
            span: span,
            span: span,
            : .innerHTML = mouseposition + target,
            let: let,
            mouseposition: mouseposition,
            span: span,
            : .style.left = x + "px",
            span: span,
            : .style.top = y + "px"
        },
        function: logInfo(_event), void: {
            console: console,
            : .log(_event),
            console: console,
            : .log(_event.type),
            console: console,
            : .log(_event.target),
            console: console,
            : .log(_event.currenttTarget)
        }
    };
})(Eventinspector || (Eventinspector = {}));
//# sourceMappingURL=Skript%20A%202-1.js.map