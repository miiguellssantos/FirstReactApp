import { Link } from "react-router-dom";

const NotFound = () =>{
    return (
        <div className="notFound">
            <h2>Sorry!</h2>
            <p>That page cannot be found.</p>
            <Link to="/">Click here to go to the homepage. </Link>
        </div>
    );
}

export default NotFound;