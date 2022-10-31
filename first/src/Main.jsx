// import React from "react";
// export function Main() {
//   return <div>main</div>;
// }
// import axios from "axios";
// import React, { useState, useEffect } from "react";

// export function Main() {
//   const [posts, setPosts] = useState([]);
//   //   const [id, setId] = useState(1);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/comments`).then((data) => {
//       setPosts([...data.data]);
//       setFilteredPosts([...data.data]);
//     });
//   }, []); //why this simple array? in this useEffect

//   useEffect(() => {
//     let filteredData = posts.filter((post) => post.name.includes(search));
//     setFilteredPosts([...filteredData]);
//   }, [search]);

//   const handleSort = () => {
//     let sortedData = filteredPosts.sort((a, b) => a.body.localeCompare(b.body));
//     console.log(sortedData);
//     setFilteredPosts([...sortedData]);
//   };

//   return (
//     <div>
//       <p>Main Demo</p>
//       {/* <button onClick={() => setId((prev) => prev + 1)}>increment</button> */}
//       <input
//         type="text"
//         id="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={handleSort}>sort</button>
//       {filteredPosts.map((post) => (
//         <div>
//           <h1>name - {post.name}</h1>
//           <p>body- {post.body}</p>
//         </div>
//       ))}

//       {/* <h1>{posts.title}</h1>
//       <p>{posts.body}</p> */}
//     </div>
//   );
// }
