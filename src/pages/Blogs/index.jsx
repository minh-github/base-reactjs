import React, { memo } from "react"
import { Link } from "react-router-dom"

const Blogs = ()=>{

  const blogList = [
    {id:1, title: "post 1"},
    {id:2, title: "post 2"},
    {id:3, title: "post 3"},
    {id:4, title: "post 4"},
    {id:5, title: "post 5"},
    {id:6, title: "post 6"}
  ]

  return (
    <>
      <div>Blogs</div>
      {blogList.map((item, index)=>(
        <li key={index}>
          <Link to={`/blogs/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </>
  )
}

export default memo(Blogs)