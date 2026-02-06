import { useEffect, useState } from "react";
import ProductCard from "./page";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const limit = 10; // ek page me 10 products

  function fetchProducts(currentPage) {
    const skip = (currentPage - 1) * limit;

    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination Buttons */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 15px" }}>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
