"use strict";
/**
 * Utility function to form Panel Url
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formPanelUrl = void 0;
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
//# sourceMappingURL=panel.js.map