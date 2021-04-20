const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;
  // console.log(blogs);

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-previews" key={blog.id} >
          <h2>{blog.title}</h2>
                    <div className="body"> 
                        <p class="b">{blog.body}</p>
                    </div>
                    <div className="author">
                        <p class="author" fontSize = "6">written by - {blog.author}</p>
                    </div>
                    <button onClick = {()=> handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;