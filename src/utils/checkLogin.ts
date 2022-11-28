import getCookie from "./getCookie";

function checkLogin(): boolean {
  const token = getCookie("usertoken");
  if(token !== "") return true;
  return false;
}

export default checkLogin;