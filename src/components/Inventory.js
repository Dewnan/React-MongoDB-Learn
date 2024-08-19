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
            <h1>Inventory Items</h1>
            <div class="container table-responsive h-100 mask d-flex align-items-center row justify-content-center col-12">
                <table class="table table-dark table-bordered mb-0">
                    <thead>
                        <tr>
                            <th scope="col">EMPLOYEES</th>
                            <th scope="col">POSITION</th>
                            <th scope="col">CONTACTS</th>
                            <th scope="col">AGE</th>
                            <th scope="col">ADDRESS</th>
                            <th scope="col">SALARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Tiger Nixon</th>
                            <td>System Architect</td>
                            <td>tnixon12@example.com</td>
                            <td>61</td>
                            <td>Edinburgh</td>
                            <td>$320,800</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;
