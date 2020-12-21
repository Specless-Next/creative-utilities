/**
 * Create a style tag with given css string
 * @param cssStr - Css String
 * @param id - Optional id for element
 * @param props - Optional - pass additional attribute as key values
 */
const createStyleTag = (cssStr: string, id?: string, props?: object) => {
  const s = document.createElement('style');

  const finalProps = props ?? {};
  Object.entries(finalProps).forEach(([prop, value]) => {
    s.setAttribute(prop, String(value));
  });

  if (id) {
    s.setAttribute('id', id);
  }
  s.setAttribute('type', 'text/css');

  const cssTextNode = document.createTextNode(cssStr);
  s.appendChild(cssTextNode);
  return s;
};

export {createStyleTag};
