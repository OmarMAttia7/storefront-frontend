import { string as zodString } from "zod";
const validatorList: { [key: string]: Function } = {
  firstName: zodString()
    .min(2, {
      message: "First Name has to be longer than 2 characters",
    })
    .max(50, {
      message: "First Name has to be shorter than 50 characters",
    }).safeParse,

  lastName: zodString()
    .min(2, {
      message: "Last Name has to be longer than 2 characters",
    })
    .max(50, {
      message: "Last Name has to shorter than 50 characters",
    }).safeParse,

  email: zodString().email({ message: "Please enter a valid email address." })
    .safeParse,
    
  password: zodString().min(6, {
    message: "Password has to be longer than 6 characters",
  }).safeParse,
};
export default validatorList;
