import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <article>
                <h1>Page Not Found</h1>
                <p>Sorry , You write wrong url.</p>
                <Link to="/">Go Back Home</Link>
            </article>
        </div>
    )
}

export default NotFound;