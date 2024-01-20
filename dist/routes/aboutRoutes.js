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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { Router } from "express";
import AboutController from "@controller/aboutController";
var AboutRoute = /*#__PURE__*/ function() {
    "use strict";
    function AboutRoute() {
        _class_call_check(this, AboutRoute);
        _define_property(this, "path", "/about");
        _define_property(this, "router", Router());
        _define_property(this, "aboutController", new AboutController());
        this.initializeRoutes();
    }
    _create_class(AboutRoute, [
        {
            key: "initializeRoutes",
            value: function initializeRoutes() {
                this.router.post("".concat(this.path, "/ubquiz"), this.aboutController.getAboutUs);
            }
        }
    ]);
    return AboutRoute;
}();
export default AboutRoute;

//# sourceMappingURL=aboutRoutes.js.map