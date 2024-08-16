// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Home = () => {

//     const [posts, setPosts] = useState([]);
//     const [isLoading, setIsloading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchPosts = async () =>{
//         try {
//             const response = await axios.get("http://localhost:3000/api/posts/");
//             console.log(response);
//             if(!response.data){
//                 throw new Error('Api response data is empty');
//             }
//             setPosts(response.data);
//         } catch (error) {
//             setError(error.message);
//             // throw new Error('Error')
//         }finally{
//             setIsloading(false);
//         }
//     }

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const formattedDate = (dateString) => {
//       const date = new Date(dateString);
//       const year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const day = String(date.getDate()).padStart(2, '0');
//       return `${year}-${month}-${day}`;
//   };

//   return (
//   <>
//         <section className="py-16">
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                 <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
//                     <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
//                     <p className="text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
                    
//                 </div>
//                 <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
//                     {
//                         posts.map((items) => (
//                             <li className="w-full mx-auto group sm:max-w-sm" key={items._id}>
//                                 <Link to={`/posts/`+ items._id}>
//                                     <img src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
//                                     <div className="mt-3 space-y-2">
//                                         <span className="block text-indigo-600 text-sm">{formattedDate(items.createdAt)}</span>
//                                         <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
//                                             {items.title}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 line-clamp-3">{items.content}</p>
//                                     </div>
//                                 </Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </section>
  
//       </>

//   )

// }

// export default Home

