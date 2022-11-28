import api from "..";
import getCookie from "../../utils/getCookie";

async function getUser() {
  const id = 1;
  console.log(id);
  const response = await fetch(`${api}/users/${id}`, {
    headers: {}
  });
  
  return response.json();
}

export default getUser;