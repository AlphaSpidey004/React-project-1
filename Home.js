import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title: "My new Website", body: "lorem ipsum...", author:"Arthur",id:1},
        {title: "My new Website", body: "lorem ipsum...", author:"Arthur",id:2},
        {title: "My new Website", body: "lorem ipsum...", author:"mario",id:3},
    ])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
            <BlogList blogs={blogs.filter((blogs)=>blogs.author === "mario")} title="Mario's blogs"/>
        </div>
     );
}
 
export default Home
;