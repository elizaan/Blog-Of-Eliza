import { useParams } from "react-router";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {

    const {id} = useParams();

    const {data: blog, isLoading, errors} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = ()=> {
        fetch('http://localhost:8000/blogs/' + blog.id,{

            method: 'DELETE'
        })
        .then(() => {

            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {errors && <div> {errors} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p class="author" fontSize ="6"> - written by {blog.author}</p>
                    <div class="body">{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>

            )}
        </div>
     );
}
 
export default BlogDetails;