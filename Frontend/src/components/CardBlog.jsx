import React from 'react'
import { Link } from 'react-router-dom'

const CardBlog = ({id ,title, content, img , createdAt}) => {
    
  return ( 
    <div>
        <Link to={`/posts/`+ id}>
            <img src={img} loading="lazy" alt={title} className="w-full rounded-lg" />
            <div className="mt-3 space-y-2">
                <span className="block text-indigo-600 text-sm">{createdAt}</span>
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 line-clamp-3">{content}</p>
            </div>
        </Link>
    </div>
  )
}


export default CardBlog