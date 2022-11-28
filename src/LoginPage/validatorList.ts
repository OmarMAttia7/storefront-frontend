import { string as zodString } from "zod";
const validatorList: { [key: string]: Function } = {
  email: zodString().email({ message: "Please enter a valid email address." })
    .safeParse,
    
  password: zodString().min(6, {
    message: "Password has to be longer than 6 characters",
  }).safeParse,
};
export default validatorList;
