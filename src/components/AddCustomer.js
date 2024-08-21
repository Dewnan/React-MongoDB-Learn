import React, { useState } from "react";
import { customersAPI } from "./apiConfig";

const AddCustomer =()=> {

    const [customer, setCustomer] = useState({
        customer_id: "",
        customer_name: "",
        mail: "",
        points: ""
    });

    const handleChange = (e)=>{
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(customersAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item added:', data);
                setCustomer({ customer_id: "", customer_name: "", mail: "", points: "" }); // Clear the form
            })
            .catch(error => console.error('Error adding item:', error));
    };

    return (
        <div className="container text-light border border-light">
            <h4>Add New User</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-2 mb-2">
                        <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="Customer ID"
                            name="customer_id"
                            value={customer.customer_id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Customer Name"
                            name="customer_name"
                            value={customer.customer_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Mail"
                            name="mail"
                            value={customer.mail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-3 mb-2">
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Points"
                            name="points"
                            value={customer.points}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm mt-2 mb-2 me-2">Add Customer</button>
            </form>
        </div>
    );
};

export default AddCustomer;