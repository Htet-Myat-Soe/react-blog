import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();

    const {data , error, isPending} = useFetch("http://localhost:8000/data/"+id);

    const history = useHistory();

    const deleteBlog = () => {
        fetch("http://localhost:8000/data/"+data.id,{
            method : "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && 
                <article className="desc">
                    <h2>{data.title}</h2>
                    <em>Written by {data.author}</em>
                    <p>
                        {data.body}
                    </p>
                    <button onClick={deleteBlog}>Delete</button>
                </article>
            }
        </div>
    )

}

export default BlogDetails;