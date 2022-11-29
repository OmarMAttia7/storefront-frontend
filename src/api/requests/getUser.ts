import api from "..";
import getCookie from "../../utils/getCookie";
import { Base64 } from "js-base64";

async function getUser() {
  const token = getCookie("usertoken");
  const base64UserInfo = token.split(".")[1];
  const decodedUserInfo = JSON.parse(Base64.decode(base64UserInfo));
  const id = decodedUserInfo.user_id;
  const response = await fetch(`${api}/users/${id}`, {
    headers: [["Authorization", `Bearer ${token}`]],
  });
  const jsonData = await response.json();

  return {
    id: jsonData.id,
    firstName: jsonData.first_name,
    lastName: jsonData.last_name,
    email: jsonData.email,
  };
}

export default getUser;
