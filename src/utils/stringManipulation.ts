const capitalizedString = (str: string = "") =>
  str.charAt(0).toUpperCase() + str.slice(1);

const stringToLowerCase = (str: string = "") => str.toLowerCase();

function truncateTextWithEllipsis(
  text: string = "",
  maxLength: number,
  ignore: boolean
) {
  if (text.length <= maxLength || ignore) {
    return text;
  }
  const truncatedText = text.slice(0, maxLength - 3).trim() + " ...";
  return truncatedText;
}

export { capitalizedString, stringToLowerCase, truncateTextWithEllipsis };
