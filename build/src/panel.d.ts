/**
 * Utility function to form Panel Url
 */
declare type panelQuery = {
    id: string;
    width: number;
    height: number;
    [k: string]: string | number | boolean;
};
declare const formPanelUrl: (panelQuery: panelQuery, csfConstants: any) => string;
/**
 * @returns {HTMLIFrameElement} Created Iframe
 */
declare const createIFrame: () => HTMLElement;
export { formPanelUrl, createIFrame };
