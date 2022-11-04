"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonSizes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var classnames_1 = __importDefault(require("classnames"));
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
exports.ButtonSizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
};
/**
 * Button component
 */
var Button = function (_a) {
    var children = _a.children, className = _a.className, size = _a.size, _b = _a.rounded, rounded = _b === void 0 ? true : _b, _c = _a.elevation, elevation = _c === void 0 ? false : _c, props = __rest(_a, ["children", "className", "size", "rounded", "elevation"]);
    return ((0, jsx_runtime_1.jsx)(StyledButton, __assign({ type: "button", className: (0, classnames_1.default)('btn', size ? "btn-".concat(size) : '', elevation ? "shadow".concat(size ? '-' + size : '') : '', className, {
            'rounded': rounded
        }) }, props, { children: children })));
};
exports.Button = Button;
exports.default = exports.Button;
var templateObject_1;
//# sourceMappingURL=index.js.map