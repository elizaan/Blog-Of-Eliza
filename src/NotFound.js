import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry :'(</h2>
      <p>We can't find your requested page</p>
      <Link to="/">Go back to the homepage...</Link>
    </div>
  );
}
 
export default NotFound;
