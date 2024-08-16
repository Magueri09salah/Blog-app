// import React from 'react'
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const Post = () => {

//     const { id } = useParams();
//     const [post, setPost] = useState([]);
//     // const [user, setUser] = useState([]);

//     const [isLoading, setIsloading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchPost = async () =>{
//         try {
//             const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
//             console.log(response);
            
//             if(!response.data){
//                 throw new Error('Api response data is empty');
//             }
//             setPost(response.data);
            
//         } catch (error) {
//             setError(error.message);
//             // throw new Error('Error')
//         }finally{
//             setIsloading(false);
//         }
//     }
   

//     useEffect(() => {
//         fetchPost(id);
//     }, [id]);

//     const formattedDate = (dateString) => {
//       const date = new Date(dateString);
//       const year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const day = String(date.getDate()).padStart(2, '0');
//       return `${year}-${month}-${day}`;
//   };

//   return (
//     <section>
//     <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 md:px-8 xl:flex">
//         <div className="max-w-full space-y-5 mx-auto text-center xl:text-left">
//             <h1 className="text-4xl text-center text-gray-800 font-extrabold mx-auto md:text-5xl">
//                 {post.title}
//             </h1>
//             <p className="text-3xl max-w-xl mx-auto xl:mx-0">
//             {/* {post.author.username} */}
//             </p>
//             <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
//             <div className="relative">
//                 <img src={post.img} className="w-full rounded-lg" alt="" />
                
//             </div>
//         </div>
//             <p className="max-w-full text-center mx-auto xl:mx-0">
//             {post.content}
//             </p>
//             <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-center">
//                 {/* <Link to={`/updatePost`} className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
//                     Update
//                 </Link> */}
//                 <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
//                     Delete
//                 </a>
//             </div>
//         </div>
//     </div>
        
    
// </section>
//   )
// }

// export default Post