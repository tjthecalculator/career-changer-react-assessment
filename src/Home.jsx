import { Link } from "react-router-dom"
import React from "react"
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/owner">Owner</Link></li>
        </ul>
      </nav>
      <h1>Generation Thailand React - Assessment</h1>
        <Link to='/user'><button>User Home Sector</button></Link>
        <Link to='/admin'><button>Admin Home Sector</button></Link>
    </div>
  )
}

export default Home