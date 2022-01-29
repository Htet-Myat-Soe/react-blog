import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author,setAuthor] = useState('Mario');
    const [isPending,setIsPending] = useState(false);

    const history = useHistory();

    const addBlog = e => {
        e.preventDefault();
        setIsPending(true);
        setTimeout(() => {
            fetch("http://localhost:8000/data",{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({title,body,author})
        })
        .then((res) =>{
            setIsPending(false);
            history.push('/');
        })
        },1000)
    }

    return (
        <div>
            <h1>Add New Blog</h1>

            <form className="create" onSubmit={addBlog}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
                <label>Blog Body</label>
                <textarea required value={body} onChange={e => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <select required value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Hook">Hook</option>
                </select>
                {isPending ? <button disabled>Adding Blog...</button> 
                : <button  type="submit">Add Blog</button>}               
            </form>
        </div>
    )
}

export default Create;