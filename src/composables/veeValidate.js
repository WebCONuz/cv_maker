import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import {
  required,
  min,
  max,
  email,
  digits,
  url,
  is_not,
  confirmed,
  image,
  one_of,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", Form);
    app.component("VeeField", Field);
    app.component("VeeError", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("digits", digits);
    defineRule("url", url);
    defineRule("is_not", is_not);
    defineRule("confirmed", confirmed);
    defineRule("image", image);
    defineRule("one_of", one_of);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} is required`,
          min: `The ${ctx.field} must be minimum ${ctx.rule.params[0]} characters`,
          max: `The ${ctx.field} is too long`,
          email: `The ${ctx.field} is must be email`,
          digits: `The ${ctx.field} should consist of 9 digits`,
          url: `The ${ctx.field} should be url`,
          is_not: `This field should not be empty`,
          confirmed: `This field should be same the password`,
          image: `File should be image`,
        };
        return messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `${ctx.field} is empty`;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnModelUpdate: true,
      validateOnInput: true,
    });
  },
};
