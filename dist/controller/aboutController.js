function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var AboutController = /*#__PURE__*/ function() {
    "use strict";
    function AboutController() {
        _class_call_check(this, AboutController);
    }
    _create_class(AboutController, [
        {
            key: "getAboutUs",
            value: function getAboutUs(req, res, next) {
                console.log("Hiii");
            }
        }
    ]);
    return AboutController;
}();
export default AboutController;

//# sourceMappingURL=aboutController.js.map