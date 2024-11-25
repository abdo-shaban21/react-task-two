/* eslint-disable react/prop-types */

import  { useEffect, useState } from "react";
import { posts } from "../data/data";

export default function Posts({clickVal}) {
    console.log(clickVal);
    
    const [filteredPosts, setFilteredPosts] = useState([]);
    useEffect(() => {
        setFilteredPosts(posts); // set initial state posts
    }, []);
    useEffect(() => {
        // this condtion for show all posts if user do not click on one type
        if (clickVal) {
            const foundPosts = posts.filter((ele) => ele.type === clickVal);
            setFilteredPosts(foundPosts);
        
        }
            
    }, [clickVal]);
    useEffect(() => {
    },[])
    return (
        <div className="posts_container">
            {filteredPosts.map((ele) => (
                <div className="post" key={ele.id}>
                    <h2>{ele.title}</h2>
                    <span className={`type ${ele.type == "Blog" ? "blogBadge" : ele.type == "Article" ? "articalBadge" : "postBadge"}`}>{ele.type}</span>
                </div>
            ))}
        </div>
    );
}
