import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFoods } from "../../../Components/Controller/getFoods";
import Header from "../../../Components/Tusan/Header";
import ProductDetails2 from "../../../Components/Tusan/ProductDetails2";
import CartItem from "../../../Components/Tusan/CartItem";
import CartFooter from "../../../Components/Tusan/CartFooter";

const CartPageBesar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    // Load cartItems from localStorage if it exists
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    fetchProductData();
    fetchFoods();
  }, []);

  useEffect(() => {
    // Update localStorage whenever cartItems changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchProductData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.trplweb.wefgis-sync.com/api/foods/${id}`);
      if (!response.ok) throw new Error("Failed to fetch product");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchFoods = () => {
    getFoods((response) => {
      if (response.success && Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("Data tidak valid", response);
      }
    });
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleCheck = () => setChecked((prev) => !prev);

  const handleDelete = (idToDelete) => {
    const itemToDelete = cartItems.find((item) => item.id === idToDelete);
    if (itemToDelete) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        stok: prevProduct.stok + itemToDelete.quantity,
      }));
      setCartItems((prev) => prev.filter((item) => item.id !== idToDelete));
    }
  };

  const handleAddToCart = () => {
    if (product && quantity <= product.stok) {
      const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
      const quantityToAdd = checked ? quantity : 1;

      if (existingItemIndex > -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += quantityToAdd;
        setCartItems(updatedCartItems);
      } else {
        const newItem = {
          id: product.id,
          nama_makanan: product.nama_makanan,
          price: product.price,
          quantity: quantityToAdd,
          foto_makanan: product.foto_makanan,
        };
        setCartItems((prev) => [...prev, newItem]);
      }

      setProduct((prevProduct) => ({
        ...prevProduct,
        stok: prevProduct.stok - quantityToAdd,
      }));
      setQuantity(1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4">
        {loading ? (
          <div>Loading product...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <ProductDetails2
            product={product}
            quantity={quantity}
            increment={incrementQuantity}
            decrement={decrementQuantity}
            checked={checked}
            onCheck={handleCheck}
          />
        )}
      </div>

      <CartFooter
        quantity={checked ? quantity : 0}
        onDelete={() => handleDelete(product?.id)}
        onAddToCart={handleAddToCart}
        onSave={() => navigate('/shop')}
      />

      <div className="p-4">
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onDelete={() => handleDelete(item.id)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPageBesar;
