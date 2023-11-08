import { Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
  const params = useParams();
  const [ query, setQuery ] = useSearchParams();
  const { state } = useLocation();

  console.log(params);
  console.log(query)

  return (
    <div>
        <h1>Posts {`Params: ${params.id} | Query String: ${query.get('page')} | Segunda query: ${query.get('segunda')}`}</h1>
        { state }
        <Outlet />
    </div>
  )
}
