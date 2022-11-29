import api from "..";
import getCookie from "../../utils/getCookie";
import { Base64 } from "js-base64";

async function getUser() {
  const token = getCookie("usertoken");
  const decodedToken = Base64.decode(token);
  const searchString = "\"user_id\"";
  const idStringPos = decodedToken.indexOf(searchString);
  const id = Number(decodedToken[idStringPos + searchString.length + 1])
  const response = await fetch(`${api}/users/${id}`, {
    headers: [
      ["Authorization", `Bearer ${token}`]
    ],
  });
  const jsonData = await response.json();

  return {
    id: jsonData.id,
    firstName: jsonData.first_name,
    lastName: jsonData.last_name,
    email: jsonData.email
  };
}

export default getUser;
