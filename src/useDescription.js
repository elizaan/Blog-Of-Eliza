import { useState } from 'react';
import Home from "./Home";

const useDescription = (initial) => {

    const [para, setPara] = useState(initial);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        if (count === 1) {
            setPara('I am an Undergraduate Student');
        } else if (count === 2) {
            setPara('I am in Level 4 Term 1 in CSE Department, BUET');
        } else if (count === 3) {
            setPara('I love to travel and my favourite pastime is Dancing!!');
        } else if (count === 4) {
            setPara('I have been elected the President of BUET Dance Club');
        } else if (count === 5) {
            setPara('Want to know more about me and my friends?');
        } else if (count === 6) {
            setPara('Give a tour to this friends\' blog! Stay safe, Tada!');
        }

        // console.log("Hello, Everyone", e.target);
    }
    // return ( para,
    //     <div className="description">
    //         {<Home handleClick = {handleClick}/>}
    //     </div>
        
    // );
    return {para, handleClick}
    //return (  );
}

export default useDescription;