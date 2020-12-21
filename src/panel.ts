/**
 * Utility function to form Panel Url
 */
type panelQuery = {
  id: string;
  width: number;
  height: number;
  [k: string]: string | number | boolean;
};

const formPanelUrl = (panelQuery: panelQuery, csfConstants: any) => {
  const requiredConstants = [
    'templateConfig',
    'templateLibraryRoot',
    'templateLibraryBuild',
    'csfUrl',
    'isPreview',
    'isPreviewInterface',
    'deviceType',
  ];

  const urlParams = new URLSearchParams();

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

export {formPanelUrl, createIFrame};
