import {createStyleTag} from '../src/style';

const cssStr = '.test{color: black;}';

describe('Base Style Tag', () => {
  const styleTag = createStyleTag(cssStr);

  test('Tag is style', () => {
    const nodeName = styleTag.nodeName;
    expect(nodeName).toEqual('STYLE');
  });

  test('Style Tag has correct type attr', () => {
    const typeAttr = styleTag.getAttribute('type');
    expect(typeAttr).toEqual('text/css');
  });

  test('Style Tag content is set corectly', () => {
    const innerText = styleTag.textContent;
    expect(innerText).toEqual(cssStr);
  });
});

describe('Style Tag Creation with Id / Props', () => {
  const testId = 'testId';
  const testProps = {
    'data-specless': 'testValue',
  };
  const styleTag = createStyleTag(cssStr, testId, testProps);

  test('Style tag id is set correctly', () => {
    const id = styleTag.id;
    expect(id).toEqual(testId);
  });
});
