"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDfpSlot = void 0;
/**
 * Sets up the inside of the DFP slot
 * @param doc - DFP Slot Document
 */
const setupDfpSlot = (doc) => {
    doc.body.style.position = 'relative';
    doc.documentElement.style.position = 'relative';
    doc.body.style.width = '100%';
    doc.documentElement.style.width = '100%';
    doc.body.style.height = '100%';
    doc.documentElement.style.height = '100%';
    doc.body.style.overflow = 'hidden';
};
exports.setupDfpSlot = setupDfpSlot;
//# sourceMappingURL=google.js.map