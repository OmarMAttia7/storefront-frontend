import User from "../types/User";

type UserInfo = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export default async function signupRequest(userInfo: UserInfo): Promise<void> {
  console.log("success:\n" + userInfo);
}