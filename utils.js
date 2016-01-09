Utils = Utils ? Utils : {};

Utils.repeat = (str, times) => {
  return new Array(times + 1).join(str);
};

Utils.validateEmail = (email) => {
  const re =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};
