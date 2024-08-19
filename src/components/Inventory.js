import React, { useState, useEffect } from "react";

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div class="inv">
            <div className="container table-responsive mask d-flex align-items-center justify-content-center">
                <table className="table table-dark table-bordered mb-0">
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
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;
