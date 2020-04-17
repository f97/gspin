const translate = require('google-translate-open-api').default;

const gspin = async (content, lang = 'vi') => {
  const cnResult = await translate(
      content, {to: 'zh-CN'},
  );
  const cnContent = cnResult.data[0];
  const toContent = await translate(cnContent, {
    to: lang,
  });
  return toContent.data[0];
};

module.exports = {gspin};
