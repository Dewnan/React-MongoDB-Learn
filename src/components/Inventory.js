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
        <div className="inv">
            <h4>Inventory Items</h4>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                       Item id: {item.item_id} Name: {item.item_name} Stock: {item.stock}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
