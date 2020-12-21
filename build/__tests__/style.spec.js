"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("../src/style");
const cssStr = '.test{color: black;}';
describe('Base Style Tag', () => {
    const styleTag = style_1.createStyleTag(cssStr);
    test('Tag is style', () => {
        const nodeName = styleTag.nodeName;
        expect(nodeName).toEqual('STYLE');
    });
    test('Style Tag has correct type attr', () => {
        const typeAttr = styleTag.getAttribute('type');
        expect(typeAttr).toEqual('text/css');
    });
});
