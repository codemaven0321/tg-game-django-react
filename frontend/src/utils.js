export const parseQueryString = (queryString) => {
  const params = {};
  const queryStringWithoutQuestionMark = queryString.slice(1); // Remove the leading '?'
  const keyValuePairs = queryStringWithoutQuestionMark.split("&");

  keyValuePairs.forEach((keyValue) => {
    const [key, value] = keyValue.split("=");
    params[key] = decodeURIComponent(value?.replace(/\+/g, " "));
  });

  return params;
};
