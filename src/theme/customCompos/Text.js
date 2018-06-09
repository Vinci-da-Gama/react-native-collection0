// detect what the platform is, this is the way to pass theme style. Also check boot/setup.js
import variable from '../platforms/platforms';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
