"use strict";
/**
 * Utility function to form Panel Url
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIFrame = exports.formPanelUrl = void 0;
const url_1 = require("url");
const formPanelUrl = (panelQuery, csfConstants) => {
    const requiredConstants = [
        'templateConfig',
        'templateLibraryRoot',
        'templateLibraryBuild',
        'csfUrl',
        'isPreview',
        'isPreviewInterface',
        'deviceType',
    ];
    const urlParams = new url_1.URLSearchParams();
    // Add params for panelQuery
    Object.entries(panelQuery).forEach(([prop, value]) => {
        urlParams.set(prop, String(value));
    });
    // Add params for constants
    requiredConstants.forEach(c => {
        const value = String(csfConstants[c]);
        urlParams.set(c, value);
    });
    const baseUrl = `${csfConstants.templateRoot}/html/${panelQuery.id}`;
    const url = `${baseUrl}?${urlParams.toString()}`;
    return url;
};
exports.formPanelUrl = formPanelUrl;
/**
 * @returns {HTMLIFrameElement} Created Iframe
 */
const createIFrame = () => {
    const iframe = document.createElement('IFRAME');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    return iframe;
};
exports.createIFrame = createIFrame;
//# sourceMappingURL=panel.js.map