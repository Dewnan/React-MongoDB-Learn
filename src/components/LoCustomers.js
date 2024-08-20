import React, { useState, useEffect } from "react";
import AddCustomer from "./AddCustomer";
import RemoveCustomer from "./RemoveCustomer";

const Customers = () => {
    const [customers, setCustomer] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(prevShowEditForm => !prevShowEditForm);
    };


    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then(response => response.json())
            .then(data => setCustomer(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div class="cus">
            <div className="container table-responsive mask d-flex align-items-center">
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider table-divider-color">
                        {customers.map(customer => (
                            <tr key={customer._id}>
                                <td>{customer.customer_id}</td>
                                <td>{customer.customer_name}</td>
                                <td>{customer.mail}</td>
                                <td>{customer.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className=" justify-content-end mb-3 ms-3">
                <button type="button" className="btn btn-primary" onClick={handleEditClick}> {showEditForm ? "Done" : "Edit"} </button>
            </div>
            {showEditForm && <AddCustomer />}
            {showEditForm && <RemoveCustomer />}
        </div>
    );
};

export default Customers;
