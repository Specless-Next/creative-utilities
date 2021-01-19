/**
 * Set a cookie
 * Based on - https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
 *
 * @param identifier Unique identifier for the cookie i.e. tag id, ad id
 * @param expires Optional enter in hours how long before cookie expires, default 24hrs
 * @param doc Optional document to pass to cookie
 */
const setCookie = (identifier: string, expires = 24, doc = document) => {
  let expireStr = '';
  if (expires) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 60 * 60 * 1000);
    expireStr = `;expires= + ${date.toUTCString()}`;
  }
  doc.cookie = `${identifier}=""${expireStr};path=/`;
};

/**
 * Get a cookie
 *
 * Based on - // https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
 * @param indentifier Unique identifier for the cookie i.e. tag id, ad id
 * @param doc Optional pass in the document to use
 */
const checkCookie = (indentifier: string, doc = document) => {
  const present = doc.cookie.match(
    '(^|;)\\s*' + indentifier + '\\s*=\\s*([^;]+)'
  );
  return present ? true : false;
};

export {checkCookie, setCookie};
