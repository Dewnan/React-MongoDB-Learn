import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const AddItem = () => {
    const [item, setItem] = useState({
        item_id: "",
        item_name: "",
        price: "",
        stock: ""
    });

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item added:', data);
                setItem({ item_id: "", item_name: "", price: "", stock: "" }); // Clear the form
            })
            .catch(error => console.error('Error adding item:', error));
    };

    return (
        <div className="container text-light border border-light">
            <h4>Add New Item</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-2 mb-2">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="Item ID"
                            name="item_id"
                            value={item.item_id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Item Name"
                            name="item_name"
                            value={item.item_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="Price"
                            name="price"
                            value={item.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="Quantity"
                            name="Quantity"
                            value={item.stock}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm mt-2 mb-2 me-2">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
