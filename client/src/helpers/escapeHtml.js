import { Parser } from 'html-to-react';

const escapeHtml = (htmlString) => {
  const htmlToReactParser = new Parser();
  const escapeHtmlString = data => htmlToReactParser.parse(unescape(data));
  return escapeHtmlString(htmlString);
};


export default escapeHtml;
