function getCookie(cookieName: string): string {
  const cookieValue = document.cookie.split('; ')
  .find((row) => row.startsWith(`${cookieName}=`))
  ?.split('=')[1];

  return cookieValue ? cookieValue : "";
}

export default getCookie;