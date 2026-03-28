import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { displayAllProducts, deleteAProduct } from '../../Services/ProductService';
import { getRole } from '../../Services/LoginService';
import '../../DisplayView.css';

const ProductReport = () => {

  const [products, setProducts] = useState([]);
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    getRole().then(res => setRole(res.data));
    displayAllProducts().then(res => setProducts(res.data));
  }, []);

  const removeProduct = (id) => {
    deleteAProduct(id).then(() => {
      setProducts(prev => prev.filter(p => p.productId !== id));
    });
  };

  const returnBack = () => {
    role === "Admin"
      ? navigate('/admin-menu')
      : navigate('/manager-menu');
  };

  // 🔍 SEARCH
  const filteredProducts = products.filter(p =>
    p.productName.toLowerCase().includes(search.toLowerCase()) ||
    p.skuId.toLowerCase().includes(search.toLowerCase()) ||
    p.vendorId.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 PAGINATION
  const indexOfLast = currentPage * itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfLast - itemsPerPage, indexOfLast);

  return (
    <div className="page-container">

      {/* TITLE */}
      <h2 className="page-title">
        {role === 'Admin' ? 'Admin Product List' : 'Manager Product List'}
      </h2>

      {/* TOP BAR */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by name, SKU, vendor..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="table-container">

        <table className="custom-table">

          <thead>
            <tr>
              <th>Product Id</th>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Vendor Id</th>
              <th>Purchase Price</th>
              <th>Sales Price</th>
              <th>Stock</th>
              <th>Reorder Level</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentProducts.map(product => {

              const isDisabled = !product.status;

              return (
                <tr key={product.productId}>

                  <td>{product.productId}</td>
                  <td>{product.skuId}</td>
                  <td>{product.productName}</td>
                  <td>{product.vendorId}</td>
                  <td>{product.purchasePrice}</td>
                  <td>{product.salesPrice}</td>
                  <td>{product.stock}</td>
                  <td>{product.reorderLevel}</td>

                  {/* STATUS */}
                  <td>
                    {product.status
                      ? <span className="status-blue">Permitted</span>
                      : <span className="status-red">Reorder</span>}
                  </td>

                  {/* ACTION BUTTONS */}
                  <td>
                    <div className="action-buttons">

                      <Link to={`/edit-stock/${product.productId}/2`}>
                        <button className="issue-btn" disabled={isDisabled}>
                          Issue
                        </button>
                      </Link>

                      <Link to={`/edit-stock/${product.productId}/1`}>
                        <button className="purchase-btn">
                          Purchase
                        </button>
                      </Link>

                      {role === 'Admin' && (
                        <>
                          <Link to={`/edit-price/${product.productId}`}>
                            <button className="price-btn">
                              Price
                            </button>
                          </Link>

                          <button
                            className="delete-btn"
                            onClick={() => removeProduct(product.productId)}
                          >
                            Delete
                          </button>
                        </>
                      )}

                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>

      </div>

      {/* BOTTOM ACTION */}
      <div className="bottom-actions">
        <button className="return-btn" onClick={returnBack}>
          Return
        </button>
      </div>

    </div>
  );
};

export default ProductReport;