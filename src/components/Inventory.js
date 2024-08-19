import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";

const Inventory = () => {
    const [items, setItems] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(prevShowEditForm => !prevShowEditForm);
    };


    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div class="inv">
            <div className="container table-responsive mask d-flex align-items-center">
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>Item No:</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider table-divider-color">
                        {items.map(item => (
                            <tr key={item._id}>
                                <td>{item.item_id}</td>
                                <td>{item.item_name}</td>
                                <td>Rs: {item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className=" justify-content-end mb-3 ms-3">
                <button type="button" className="btn btn-primary" onClick={handleEditClick}> {showEditForm ? "Done" : "Edit"} </button>
            </div>
            {showEditForm && <AddItem />}
            {showEditForm && <DeleteItem />}
        </div>
    );
};

export default Inventory;
