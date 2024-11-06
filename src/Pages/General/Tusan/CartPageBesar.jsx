import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFoods } from "../../../Components/Controller/getFoods";
import Header from "../../../Components/Tusan/Header";
import CartFooter from "../../../Components/Tusan/CartFooter";
import CartItem from "../../../Components/Tusan/CartItem";

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
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    fetchProductData();
    fetchFoods();
  }, []);

  useEffect(() => {
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
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Items in Cart:</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>

      <CartFooter
        quantity={checked ? quantity : 0}
        onDelete={() => handleDelete(product?.id)}
        onAddToCart={handleAddToCart}
        onSave={() => navigate('/shop')}
      />
    </div>
  );
};

export default CartPageBesar;
