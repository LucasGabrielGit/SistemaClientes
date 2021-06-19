import React, { useState } from "react";
import { useEffect } from "react";
import api from "./api/api";

function App() {
  async function loadProducts() {
    const productsList = await api.get("produtos/all");
    setProducts(productsList.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);
  const [products, setProducts] = useState([
    { idProduto: 0, codProduto: 0, descricao: "" },
  ]);

  return (
    <div>
      <ul>
        {products.length === 0 ? (
          <span>Nada registrado</span>
        ) : (
          products.map((product) => (
            <li
              key={product.idProduto}
              style={{ textDecoration: "none", listStyleType: "none" }}
            >
              {product.codProduto} {"-->"} {product.descricao}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
