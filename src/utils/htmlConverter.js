import showdown from "showdown";

const htmlConverter = (md) => {
  //showdownjs markdown to html converter 의 기본값 중 일부 옵션이
  //false로 설정되어있어 true로 변경해줘야 converter에서 html 태그로 변경됨
  //취소선(strikethrough), 표(tables)
  //console.log(showdown.getDefaultOptions());
  showdown.setOption('strikethrough', true);
  showdown.setOption('tables', true);
  const converter = new showdown.Converter();
  return converter.makeHtml(md)
}

export default { htmlConverter }
