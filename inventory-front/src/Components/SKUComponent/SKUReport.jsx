import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAllSKUs, deleteSKUById } from "../../Services/SKUService";
import { getRole } from '../../Services/LoginService';
import '../../DisplayView.css';

const SKUReport = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [skuList, setSkuList] = useState([]);

  useEffect(() => {
    getRole().then(res => setRole(res.data));
    getAllSKUs().then(res => setSkuList(res.data));
  }, []);

  const returnBack = () => {
    role === 'Admin'
      ? navigate('/admin-menu')
      : navigate('/manager-menu');
  };

  const deleteSKU = (id) => {
    deleteSKUById(id).then(() => {
      setSkuList(prev => prev.filter(sku => sku.skuId !== id));
    });
  };

  return (
    <div className="page-container">

      <h2 className="page-title">
        {role === 'Admin' ? "Admin SKU List" : "Manager SKU List"}
      </h2>

      <div className="table-container">

        <table className="custom-table">

          <thead>
            <tr>
              <th>No.</th>
              <th>SKU Id</th>
              <th>Description</th>
              <th>Category</th>
              {role === 'Admin' && <th>Action</th>}
            </tr>
          </thead>

          <tbody>
            {skuList.map((sku, index) => (
              <tr key={sku.skuId}>

                <td>{index + 1}</td>
                <td>{sku.skuId}</td>
                <td>{sku.skuDescription}</td>
                <td>{sku.category}</td>

                {role === 'Admin' && (
                  <td>
                    <div className="action-buttons">

                      <Link to={`/update-sku/${sku.skuId}`}>
                        <button className="update-btn">Update</button>
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() => deleteSKU(sku.skuId)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                )}

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <div className="bottom-actions">
        <button className="return-btn" onClick={returnBack}>
          Return
        </button>
      </div>

    </div>
  );
};

export default SKUReport;