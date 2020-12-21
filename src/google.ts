/**
 * Sets up the inside of the DFP slot
 * @param doc - DFP Slot Document
 */
const setupDfpSlot = (doc: HTMLDocument) => {
  doc.body.style.position = 'relative';
  doc.documentElement.style.position = 'relative';
  doc.body.style.width = '100%';
  doc.documentElement.style.width = '100%';
  doc.body.style.height = '100%';
  doc.documentElement.style.height = '100%';
  doc.body.style.overflow = 'hidden';
};

export {setupDfpSlot};
