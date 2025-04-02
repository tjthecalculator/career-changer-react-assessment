import React from "react";
import { Link } from "react-router-dom";

const OwnerPage = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/owner">Owner</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default OwnerPage