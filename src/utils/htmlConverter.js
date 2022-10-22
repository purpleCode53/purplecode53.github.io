import showdown from "showdown";

const htmlConverter = (md) => {
  console.log(md)
  const converter = new showdown.Converter()
  return converter.makeHtml(md)
}

export default { htmlConverter }
