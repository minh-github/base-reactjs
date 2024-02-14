import React, { memo } from "react"
import { useParams } from 'react-router-dom';

const BlogDetail = ()=>{
  let { blogId } = useParams();
  return (
    <div>BlogDetail - post: {blogId}</div>
  )
}

export default memo(BlogDetail)