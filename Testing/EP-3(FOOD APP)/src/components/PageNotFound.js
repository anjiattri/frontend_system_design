import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  // console.log("Error", error);
  return (
    <div>
      <h1>Something went wrong!</h1>
      <h3>{error?.statusText}</h3>
    </div>
  );
}
