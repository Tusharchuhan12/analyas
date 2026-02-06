// function ProductCard({ product }) {
//     return (
//         <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition">
//             {/* Image */}
//             <img
//                 src={product.thumbnail || "https://via.placeholder.com/300"}
//                 alt={product.title}
//                 className="w-full h-48 object-cover rounded-t-xl"
//             />

//             {/* Content */}
//             <div className="p-4">
//                 {/* Title */}
//                 <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
//                     {product.title}
//                 </h2>

//                 {/* Brand + Category */}
//                 <p className="text-sm text-gray-500">
//                     {product.brand} • {product.category}
//                 </p>

//                 {/* Rating */}
//                 <div className="flex items-center gap-1 mt-2">
//                     <span className="text-yellow-500 font-medium">⭐ {product.rating}</span>
//                     <span className="text-sm text-gray-400">({product.stock} in stock)</span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-3 flex items-center gap-2">
//                     <span className="text-xl font-bold text-green-600">
//                         ${product.price}
//                     </span>
//                     <span className="text-sm text-red-500">
//                         {product.discountPercentage}% OFF
//                     </span>
//                 </div>

//                 {/* Availability */}
//                 <p
//                     className={`mt-2 text-sm font-medium ${product.availabilityStatus === "Low Stock"
//                             ? "text-red-600"
//                             : "text-green-600"
//                         }`}
//                 >
//                     {product.availabilityStatus}
//                 </p>

//                 {/* Button */}
//                 <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ProductCard;
// // 