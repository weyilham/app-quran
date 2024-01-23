import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div class="min-h-screen flex items-center justify-center">
      <div class="p-8 text-center">
        <h1 class="text-2xl mb-4 text-blue-700 font-bold ">Oops!</h1>
        <p class="mb-4">
          Sorry, an unexpected error has occurred.{" "}
          <Link to={"/"} className="text-blue-700 italic">
            Back to home
          </Link>
        </p>
        <p class="mb-4">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
