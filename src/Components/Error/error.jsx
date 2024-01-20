import { useRouteError } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full my-64 mx-auto text-center mx-auto">
        <h1 className="text-7xl font-bold my-10">404</h1>
        <h1 className="text-3l font-medium">Oops!</h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
