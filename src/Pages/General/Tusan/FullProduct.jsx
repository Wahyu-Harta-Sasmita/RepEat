import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../../Components/Tusan/Header';
import ProductDetails from '../../../Components/Tusan/ProductDetail';
import Modal from '../../../Components/Tusan/Modal'; // Import Modal
import CartPage2 from './CartPage2'; // Import CartPage2

const FullProduct = () => {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://api.trplweb.wefgis-sync.com/api/foods/${id}`);
      const data = await response.json();
      setProduct(Array.isArray(data) ? data[0] : data);
      console.log('Fetched product data:', data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className={`flex flex-col items-center p-4 mt-8 ${isModalOpen ? 'blur-md' : ''}`}>
        {!product ? (
          <p className="text-center">Loading product details...</p>
        ) : (
          <>
            <ProductDetails product={product} setIsModalOpen={setIsModalOpen} />
          </>
        )}
      </main>

      {isModalOpen && <CartPage2 product={product} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default FullProduct;
