import {  useState } from "react";
import Posts from "./components/Posts";
import { posts } from "./data/data";

export default function App() {
    
    const uniquePosts = posts.reduce((acc, curr) => {
        const existing = acc.find((post) => post.type === curr.type);
        return existing ? acc : [...acc, curr];
    }, []);
    const [clickVal, setclickVal] = useState("");
    
    return (
        <div>
            <div className="tabs">
                {/* {console.log(uniquePosts)} */}
                {/* {console.log(clickVal)} */}
                {uniquePosts.map((ele) => (
                    <span key={ele.type} onClick={()=> setclickVal(ele.type)}>{ele.type}</span>
                ))}
            </div>
            <Posts  clickVal={clickVal}/>
        </div>
    );
}
