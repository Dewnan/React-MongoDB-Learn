import React, { useState, useEffect } from "react";

const Customers = () => {
    const [customers, setItems] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(prevShowEditForm => !prevShowEditForm);
    };


    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div class="cus">
            <div className="container table-responsive mask d-flex align-items-center">
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider table-divider-color">
                        {customers.map(customer => (
                            <tr key={customer._id}>
                                <td>{customer.customer.name}</td>
                                <td>{customer.customer.mail}</td>
                                <td>Rs: {customer.number}</td>
                                <td>{customer.points}</td>
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

export default Customers;
