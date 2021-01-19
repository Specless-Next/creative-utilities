/**
 * Utility function to form Panel Url
 */
type panelQuery = {
  id: string;
  initialWidth: number;
  initialHeight: number;
  [k: string]: string | number | boolean;
};

/**
 * Construct url for the iframe panel.
 *
 * @param panelQuery - Provide panel id / initial width and height
 * @param csfConstants - Pass in the csf.env.constants here
 */
const formPanelUrl = (panelQuery: panelQuery, csfConstants: any) => {
  const urlParams = new URLSearchParams();

  // Add params for panelQuery
  Object.entries(panelQuery).forEach(([prop, value]) => {
    if (value) {
      urlParams.set(`[panel]=${prop}`, String(value));
    }
  });

  // Add params for constants
  const requiredConstants = [
    'templateConfig',
    'templateLibraryRoot',
    'templateLibraryBuild',
    'csfUrl',
    'isPreview',
    'isPreviewInterface',
    'deviceType',
  ];

  requiredConstants.forEach(key => {
    const value = csfConstants[key];
    if (value) {
      const strValue = String(value);
      urlParams.set(`constants[${key}]`, strValue);
    }
  });

  const baseUrl = `${csfConstants.templateRoot}/html/${panelQuery.id}`;
  const url = `${baseUrl}?${urlParams.toString()}`;
  return url;
};

/**
 * Iframe is created with the following style
 * ```css
 * position: absolute;
 * border: none;
 * width: 100%;
 * height: 100%;
 * top: 0;
 * left: 0;
 * ```
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
