function logout() {
  document.cookie = `usertoken=;Max-Age=-99999`;
}

export default logout;
