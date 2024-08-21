import React, { useState } from 'react';
import { itemsAPI } from './apiConfig';

const DeleteItem = () => {

    const [itemId, setItemId] = useState('');

    const handleInputChange = (e) => {
        setItemId(e.target.value);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`${itemsAPI}${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Item removed successfully');
                setItemId('');
            } else {
                alert('Failed to remove item');
            }
        } catch (err) {
            console.error('Error removing item:', err);
            alert('An error occurred while removing the item');
        }
    };

    return (
        <div className="container text-light border border-light mb-2">
            <div className='mt-2 mb-2'>
                <input
                    type="number"
                    value={itemId}
                    onChange={handleInputChange}
                    placeholder="Enter item ID to delete"/>
                <button onClick={handleDelete} className="btn btn-primary btn-sm mt-2 mb-2 ms-2">Delete Item</button>
            </div>
        </div>
    );
};
export default DeleteItem