import React from "react";
import { useParams, useRouteMatch } from 'react-router-dom'
import posts from '../../data/posts.json'
import './blog.css'

const Blog = () => {
    const { id } = useParams();
    useRouteMatch('blog/:id')
    const { title, date, content } = posts[id-1]
    return (
        <section className='post'><h1>{title}</h1>
            <p className='blog-date'>gepost op: {date}</p>
            <p className='post-content'>{content}</p></section>
    )
 }
 export default Blog