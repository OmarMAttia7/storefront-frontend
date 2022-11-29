import { decode } from "js-base64";
import api from "../api";

type UserInfo = {
  email: string;
  password: string;
};

export default async function login(userInfo: UserInfo): Promise<Response> {
  const response = await fetch(`${api}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userInfo.email,
      password: userInfo.password
    }),
  });

  if(response.status === 200){
    const jwtToken = (await response.json()).token;
    console.log(decode(jwtToken));
    document.cookie = `usertoken=${jwtToken}`
  }

  return response;
}
