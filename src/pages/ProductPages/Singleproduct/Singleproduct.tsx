// import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
// import { StyledDiv1 } from "../../../components/components.styled";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { grocery,electronics,mobiles } from "../../constant";



// function Singleproduct() {
//   const [state, setState] = useState(null);
//   const { id } = useParams();
//   const allProducts = [...grocery, ...electronics, ...mobiles] 

//   useEffect(() => {
//    const foundId = allProducts.find(p => p.id === id);
//    setState(foundId);
//   }, []);

//   const handleAddToCart = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//   };

//   const handleBuyNow = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//   };
//   return (
//     <StyledDiv1>
//       {state.map((data: { id: Key | null | undefined; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; rating: { rate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; count: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
//         <div id="MainSection" key={data.id}>
//           <div id="SubSection">
//             <div id="Image">
//               <img src={data.image} alt="product" />
//             </div>

//             <div id="Btn">
//               <button id="Cart-Btn" onClick={handleAddToCart}>
//                 <i className="fa-solid fa-cart-shopping"></i> &nbsp; Add to Cart
//               </button>
//               <button id="Buy-Btn" onClick={handleBuyNow}>
//                 <i className="fa-solid fa-angles-right"></i> &nbsp; Buy Now
//               </button>
//             </div>
//           </div>

//           <div id="SubSection">
//             <div className="Section1">
//               <h3>{data.title}</h3>
//               <h2>
//                 <i className="fa-solid fa-indian-rupee-sign">&nbsp;</i>200
//               </h2>

//               <span id="Rating">
//                 {data.rating.rate} &nbsp; <i className="fa-solid fa-star"></i>
//               </span>
//               <p>{data.rating.count} Ratings, 5285 Reviews *</p>
//               <span>Free Delivery</span>
//             </div>

//             <div className="Section2">
//               <h3>Select Size</h3>
//               <button id="Sizes">S</button>
//               <button id="Sizes">M</button>
//               <button id="Sizes">L</button>
//               <button id="Sizes">XL</button>
//               <button id="Sizes">XXL</button>
//             </div>

//             <div>
//               <div id="productDetails">
//                 <h3>Product Details</h3>

//                 <p>Name : {data.title}</p>
//                 <p>Fabric : Cotton Blend</p>
//                 <p>Sleeve Length : Short Sleeves</p>
//                 <p>Pattern : Printed</p>
//                 <p>Net Quantity (N) : 1</p>
//                 <p>Sizes : </p>
//                 <p>{data.description}</p>
//                 <p>Country of Origin : India</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </StyledDiv1>
//   );
// }

// export default Singleproduct;

import { Key, useEffect, useState } from "react";
import { StyledDiv1 } from "../../../components/components.styled";
import { useParams } from "react-router-dom";
import { grocery, electronics, mobiles, menswear, girlswear,kidswear } from "../../constant";

interface Product {
  [x: string]: Key | null | undefined;
  // id: number;
  ProName: string;
  ProPrice: number;
  ProWeight: number;
  Proimg: string;
  description: string;
}

function SingleProduct() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const allProducts = [...grocery, ...electronics, ...mobiles, ...menswear, ...girlswear, ...kidswear];

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p.id === id);
    setProduct(foundProduct || null);
  }, [id, allProducts]);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add to cart logic here
  };

  const handleBuyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Buy now logic here
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <StyledDiv1>
      <div id="MainSection" key={product.id}>
        <div id="SubSection">
          <div id="Image">
            <img src={product.Proimg} alt="product" />
          </div>

          <div id="Btn">
            <button id="Cart-Btn" onClick={handleAddToCart}>
              <i className="fa-solid fa-cart-shopping"></i> &nbsp; Add to Cart
            </button>
            <button id="Buy-Btn" onClick={handleBuyNow}>
              <i className="fa-solid fa-angles-right"></i> &nbsp; Buy Now
            </button>
          </div>
        </div>

        <div id="SubSection">
          <div className="Section1">
            <h3>{product.ProName}</h3>
            <h2>
              <i className="fa-solid fa-indian-rupee-sign">&nbsp;</i>{product.ProPrice}
            </h2>

            <span id="Rating">
              {/* Assuming rating is not in your static data */}
              {/* {product.rating.rate} &nbsp; <i className="fa-solid fa-star"></i> */}
            </span>
            <p>{/* {product.rating.count} Ratings, 5285 Reviews * */}</p>
            <span>Free Delivery</span>
          </div>

          <div className="Section2">
            <h3>Select Size</h3>
            <button id="Sizes">S</button>
            <button id="Sizes">M</button>
            <button id="Sizes">L</button>
            <button id="Sizes">XL</button>
            <button id="Sizes">XXL</button>
          </div>

          <div>
            <div id="productDetails">
              <h3>Product Details</h3>
              <p>Name: {product.ProName}</p>
              <p>Fabric: Cotton Blend</p>
              <p>Sleeve Length: Short Sleeves</p>
              <p>Pattern: Printed</p>
              <p>Net Quantity (N): 1</p>
              <p>Sizes: </p>
              <p>{product.description}</p>
              <p>Country of Origin: India</p>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv1>
  );
}

export default SingleProduct;
