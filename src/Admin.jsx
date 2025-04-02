import React, { useContext, useState } from "react";
import { TableContext } from "./TableContext";
import { Link } from "react-router-dom";

const AdminPage = () => {
    const { tableData, addRow, deleteRow } = useContext(TableContext);
    const [newRow, setNewRow] = useState({ name: '', lastname: '', position: ''});

    const handleAdd = () => {
        if (newRow.name && newRow.lastname && newRow.position) {
            addRow({ ...newRow, id: Number(newRow.id) });
            setNewRow({name: '', lastname: '', position: ''});
        }
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/owner">Owner</Link></li>
                </ul>
            </nav>
            <h1>Generation Thailand Home - Admin Sector</h1>
            <div>
                <input type="text" placeholder="First Name" value={newRow.name} onChange={(e) => setNewRow({...newRow, name: e.target.value})}></input>
            </div>
            <div>
                <input type="text" placeholder="Last Name" value={newRow.lastname} onChange={(e) => setNewRow({...newRow, lastname: e.target.value})}></input>
            </div>
            <div>
                <input type="text" placeholder="Position" value={newRow.position} onChange={(e) => setNewRow({...newRow, position: e.target.value})}></input>
            </div>
            <button onClick={handleAdd}>Add Row</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.lastname}</td>
                            <td>{row.position}</td>
                            <td><button onClick={() => deleteRow(row.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage