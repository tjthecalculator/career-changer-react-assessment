import React, { useContext } from "react";
import { TableContext } from "./TableContext";
import { Link } from "react-router-dom";

const UserPage = () => {
    const { tableData, error } = useContext(TableContext);

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/owner">Owner</Link></li>
                </ul>
            </nav>
            <h1>Generation Thailand Home - User Sector</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.lastname}</td>
                            <td>{row.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserPage