import React, { useState } from 'react';


const DeleteItem = () => {

    const [itemId, setItemId] = useState('');

    const handleInputChange = (e) => {
        setItemId(e.target.value);
    };

    const handleDelete = async() =>{
        try {
            const response = await fetch(`http://localhost:5000/api/items/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Item deleted successfully');
                setItemId('');
            } else {
                alert('Failed to delete item');
            }
        } catch (err) {
            console.error('Error deleting item:', err);
            alert('An error occurred while deleting the item');
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