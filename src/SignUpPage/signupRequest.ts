import api from "../api";
import User from "../types/User";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default async function signupRequest(userInfo: UserInfo): Promise<Response> {
  const response = await fetch(`${api}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password
    }),
  });

  return response;
}
