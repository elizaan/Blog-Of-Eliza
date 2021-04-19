import {useState} from 'react';

const Home = () =>{
    const [para, setPara] = useState('Hello Everyone, this is Ishrat Jahan Eliza');
    const [count, setCount] = useState(0);

    const [blogs,setBlogs] = useState([{title: "Introducing Kanta", body: "I am Kanta", author: "Kanta", id:1},
    {title: "Introducing Manta", body: "I am Manta", author: "Manta", id:2},
    {title: "Introducing Santa", body: "I am Santa", author: "Santa", id:3},
    {title: "Introducing Janta", body: "I am Janta", author: "Janta", id:4}]);
    
    const handleClick = () =>{
        setCount(count + 1);
        if(count===1){
            setPara('I am an Undergraduate Student');
        }
        else if(count===2){
            setPara('I am in Level 4 Term 1 in CSE Department, BUET');
        }

        else if(count===3){
            setPara('I love to travel and my favourite pastime is Dancing!!');
        }
        else if(count===4){
            setPara('I have been elected the President of BUET Dance Club');
        }
        else if (count===5){
            setPara('Want to know more about me?');
        }
        else if (count===6){
            setPara('Give a tour to my blog! Stay safe, Tada!');
        }
       
        // console.log("Hello, Everyone", e.target);
    }
    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            <p> {para} </p>
            <button onClick={handleClick}>Click me</button>
            {blogs.map((blog) =>(
                <div className="blog-previews" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <div className="body"> 
                        <p class="b">{blog.body}</p>
                    </div>
                    <div className="author">
                        <p class="author" fontSize = "6">written by - {blog.author}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;