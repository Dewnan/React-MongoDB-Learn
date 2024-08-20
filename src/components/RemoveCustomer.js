import React, { useState } from 'react';


const RemoveCustomer = () => {

    const [customer_id, setCustomerId] = useState('');

    const handleInputChange = (e) => {
        setCustomerId(e.target.value);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/customers/${customer_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Customer removed successfully');
                setCustomerId('');
            } else {
                alert('Failed to remove customer');
            }
        } catch (err) {
            console.error('Error removing customer:', err);
            alert('An error occurred while removing the customer');
        }
    };

    return (
        <div className="container text-light border border-light mb-2">
            <div className='mt-2 mb-2'>
                <input
                    type="number"
                    value={customer_id}
                    onChange={handleInputChange}
                    placeholder="Enter Customer ID" />
                <button onClick={handleDelete} className="btn btn-primary btn-sm mt-2 mb-2 ms-2">Delete Customer</button>
            </div>
        </div>
    );
};
export default RemoveCustomer;