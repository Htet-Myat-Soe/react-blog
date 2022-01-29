import { useState,useEffect } from "react";
import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = props => {

    const title ="All Blogs";

    const {data: blogs,isPending,error} = useFetch("http://localhost:8000/data")

    return (
        <div className="home">
            {error && <div>{ error }</div>}
           {isPending && <div>is loading...</div>}
           {blogs && <BlogList blogs={blogs} title={title} />}
        </div>
    )
}

export default Home;