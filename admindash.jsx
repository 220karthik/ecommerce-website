import React, { useState } from 'react';
import './admindash.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([
    {
        id: 1,
        name: 'River sand',
        price: 4000,
        desc: 'Pure river sand from Delta region Rs:4000 per unit.',
        image: 'https://4.imimg.com/data4/NI/PX/ANDROID-47284643/product-500x500.jpeg',
      },
      {
        id: 2,
        name: 'Bricks',
        price: 12,
        desc: 'Red sand brick from kongu region RS:12 per piece',
        image: 'https://media.istockphoto.com/id/639377288/photo/wood-fired-clay-brick-kiln-on-the-bank-of-a-river.jpg?s=1024x1024&w=is&k=20&c=F8kq7bcfrRjBQuqzCPH7-NfpjlRJP7JD8_vRck7-4Io=',
      },
      {
        id: 3,
        name: 'Cement',
        price: 249,
        desc: 'Good quality cement from different brands RS:249 per bag',
        image: 'https://static.wixstatic.com/media/e68837_78fe43af2de04713814be5fe2d033ba1~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e68837_78fe43af2de04713814be5fe2d033ba1~mv2.jpeg',
      },
      {
        id: 4,
        name: 'Pipes',
        price: 16,
        desc: 'Good quality pipes made up of steel RS:23 per meter and pvc Rs:15 per meter ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Vb1wmAqrFbpXwH5L5GZoiLv4pAYIbMOryQ&s',
      },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    desc: '',
    image: '',
  });

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) return alert("Please fill all fields.");
    const newEntry = {
      ...newProduct,
      id: Date.now(),
      price: parseFloat(newProduct.price),
    };
    setProducts([...products, newEntry]);
    setNewProduct({ name: '', price: '', desc: '', image: '' });
  };

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>

      <div className="add-product-form">
        <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
        <input type="text" name="desc" placeholder="Description" value={newProduct.desc} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} className="product-image" />
            <h2>{p.name}</h2>
            <p className="price">${p.price}</p>
            <p className="desc">{p.desc}</p>
            <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
