import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TableContext = createContext();

const TableProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsd5-mock-backend.onrender.com/members").then((response) => {
            setTableData(response.data);
        }).catch((err) => {
            setError(err.message);
        });
    }, []);

    const addRow = async (row) => {
        try {
            const response = await axios.post("https://jsd5-mock-backend.onrender.com/members")
            setTableData((prevData) => [...prevData, response.data])
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };
    const deleteRow = async (id) => {
        try {
            await axios.delete("https://jsd5-mock-backend.onrender.com/members")
            setTableData((prevData) => prevData.filter((row) => id !== row.id));
        }
        catch (err) {
            console.error(err);
            setError(err.message);
        }
    }

    return (
        <TableContext.Provider value={{ tableData, addRow, deleteRow, error }}>
            {children}
        </TableContext.Provider>
    )
}

export default TableProvider;