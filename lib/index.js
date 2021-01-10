const translate = require('@f97/google-translate-api');

const gspin = async (content, lang = 'vi') => {
  const cnResult = await translate(
      content, {from: lang, to: 'zh-CN'},
  );
  const cnContent = cnResult.text;
  const toContent = await translate(cnContent, {
    from: 'zh-CN', to: lang,
  });
  return toContent.text;
};

module.exports = {gspin};
