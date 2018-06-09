// detect what the platform is, this is the way to pass theme style. Also check boot/setup.js
import variable from '../platforms/platforms';

export default (variables = variable) => {
  const textAreaTheme = {
    ".underline": {
      borderBottomWidth: variables.borderWidth,
      marginTop: 5,
      borderColor: variables.inputBorderColor
    },
    ".bordered": {
      borderWidth: 1,
      marginTop: 5,
      borderColor: variables.inputBorderColor
    },
    color: variables.textColor,
    paddingLeft: 10,
    paddingRight: 5,
    fontSize: 15,
    textAlignVertical: "top"
  };

  return textAreaTheme;
};
