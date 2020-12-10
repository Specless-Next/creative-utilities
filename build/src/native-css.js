"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formNativeCssUrl = void 0;
/**
 * Generate a link to Native CSS Ad Server Function.
 * A css file is returned.
 *
 * @param orgId - Organization Id
 * @param domain - Domain Url - **Do not prefix with https or http**
 * @param cacheTimeout - Enter timeout for caching in seconds - Default to 6 hours
 */
const formNativeCssUrl = (orgId, domain, cacheTimeout = 6 * 60 * 60) => {
    const FILE_CACHER_URL = 'https://worker.specless.app/1/file-cacher';
    const NATIVE_CSS_URL = 'https://us-central1-specless-next.cloudfunctions.net/ad-server-native-css';
    const cacheValue = Math.floor(Date.now() / (1000 * cacheTimeout));
    const nativeUrl = `${NATIVE_CSS_URL}?org=${orgId}&domain=${domain}&cache=${cacheValue}`;
    return `${FILE_CACHER_URL}?url=${encodeURIComponent(nativeUrl)}`;
};
exports.formNativeCssUrl = formNativeCssUrl;
//# sourceMappingURL=native-css.js.map