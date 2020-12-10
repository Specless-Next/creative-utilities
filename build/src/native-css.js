"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formNativeCssUrl = void 0;
const FILE_CACHER_URL = 'https://worker.specless.app/1/file-cacher';
const NATIVE_CSS_URL = 'https://us-central1-specless-next.cloudfunctions.net/ad-server-native-css';
/**
 *
 * @param orgId
 * @param domain
 * @param cacheTimeout
 * @param additionalOptions
 */
const formNativeCssUrl = (orgId, domain, cacheTimeout = 60 * 60) => {
    const nativeUrl = `${NATIVE_CSS_URL}?org=${orgId}&domain=${domain}&cache=${cacheTimeout}`;
    return `${FILE_CACHER_URL}?url=${encodeURIComponent(nativeUrl)}`;
};
exports.formNativeCssUrl = formNativeCssUrl;
//# sourceMappingURL=native-css.js.map