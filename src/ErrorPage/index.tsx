import { useRouteError } from "react-router-dom";

function ErrorPage(): JSX.Element {
  const error = useRouteError() as {statusText?: string, message?: string};

  return (
    <div>
      <h1>Error</h1>
      <p>Something unexpected has occured.</p>
      <p>${error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage;