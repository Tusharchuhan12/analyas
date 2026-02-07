// // import { useEffect, useState } from "react";
// // import ProductCard from "./page";

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [page, setPage] = useState(1);

// //   const limit = 10; // ek page me 10 products

// //   function fetchProducts(currentPage) {
// //     const skip = (currentPage - 1) * limit;

// //     fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
// //       .then((res) => res.json())
// //       .then((data) => setProducts(data.products))
// //       .catch((err) => console.log(err));
// //   }

// //   useEffect(() => {
// //     fetchProducts(page);
// //   }, [page]);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>Products</h1>

// //       {products.length === 0 ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
// //           {products.map((product) => (
// //             <ProductCard key={product.id} product={product} />
// //           ))}
// //         </div>
// //       )}

// //       {/* Pagination Buttons */}
// //       <div style={{ marginTop: "30px", textAlign: "center" }}>
// //         <button
// //           onClick={() => setPage(page - 1)}
// //           disabled={page === 1}
// //         >
// //           Prev
// //         </button>

// //         <span style={{ margin: "0 15px" }}>Page {page}</span>

// //         <button onClick={() => setPage(page + 1)}>
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from "react";

// function App() {
//   const [input, setInput] = useState("");
//   const [data, setData] = useState([]);
//  console.log(input);
//   function fetchData(search) {
//     fetch(`https://dummyjson.com/products/search?q=${search}`)
//       .then((res) => res.json())
//       .then((data) => setData(data.products))
//       .catch((err) => console.log(err));
//   }

//   useEffect(() => {
//     if (!input.trim()) {
//       setData([]);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       fetchData(input);
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, [input]);

//   return (
//     <div className="p-5">
//       <input
//         type="text"
//         className="bg-red-200 py-3 px-4"
//         placeholder="Search product..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       {data.map((item) => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
 import React from 'react'
 import HeroSection from './component/HeroSection'
 function App() {
   return (
     <div>
       <HeroSection></HeroSection>
     </div>
   )
 }
 
 export default App
 