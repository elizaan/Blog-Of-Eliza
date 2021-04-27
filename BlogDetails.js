import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();

    const {data: blog, isLoading, errors} = useFetch('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {errors && <div> {errors} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p class="author" fontSize ="6"> - written by {blog.author}</p>
                    <div class="body">{blog.body}</div>
                </article>

            )}
        </div>
     );
}
 
export default BlogDetails;