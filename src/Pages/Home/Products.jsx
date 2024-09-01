import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h4 className="text-[#FF3811] text-center font-bold">Popular Products</h4>
      <h1 className="font-bold text-4xl text-center my-3">
        Browse Our Products
      </h1>
      <p className="text-sm text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don&#39;t look even slightly believable.
      </p>
      {/* service cards */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index}>
            <div className="card w-96 shadow-xl">
              <figure className="p-5 bg-[#F3F3F3]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="rounded-xl w-40 h-40 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>
                <h2 className="font-bold text-[#FF3811]">
                  Price: ${product.price}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button className="btn border-[#FF3811] text-[#FF3811] font-bold  bg-transparent">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
