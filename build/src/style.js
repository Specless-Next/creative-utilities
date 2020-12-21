"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStyleTag = void 0;
/**
 * Create a style tag with given css string
 * @param cssStr - Css String
 * @param id - Optional id for element
 * @param props - Optional - pass additional attribute as key values
 */
const createStyleTag = (cssStr, id, props) => {
    const s = document.createElement('style');
    const finalProps = props !== null && props !== void 0 ? props : {};
    Object.entries(finalProps).forEach(([prop, value]) => {
        s.setAttribute(prop, String(value));
    });
    if (id) {
        s.setAttribute('id', id);
    }
    s.setAttribute('type', 'text/css');
    const cssTextNode = document.createTextNode(cssStr);
    s.appendChild(cssTextNode);
    return s;
};
exports.createStyleTag = createStyleTag;
//# sourceMappingURL=style.js.map