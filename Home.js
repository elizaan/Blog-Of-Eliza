// import {useState,useEffect} from 'react';
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import useDescription from "./useDescription";

const Home = () =>{
    const {data: blogs, isLoading, errors, setData: setBlogs} = useFetch('http://localhost:8000/blogs');
    const {para, handleClick} = useDescription('Hello Everyone, this is Ishrat Jahan Eliza');
    // const handleClick = props.handleClick;
    
    
    //const setBlogs = useState(blogs);
    

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(data => data.id !== id);
        setBlogs(newBlogs);
    }
    
    
    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            <p> {para} </p>
            <button onClick={handleClick}>Click me</button>
            {isLoading && <div> Loading... </div>}
            { errors && <div> {errors} </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />}
        </div>
    );
}

export default Home;