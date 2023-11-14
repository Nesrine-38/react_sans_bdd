import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import User from "./Pages/User";
import AddUsers from "./Pages/AddUsers";
import UserDetails from "./Pages/UserDetails";


const Home = () => <div>Home Page</div>;

const App = () => {
  const [users, setUsers] = useState([]); // Assuming you have a state to manage users

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="footer">
          <Footer />
        </div>
        <div className="Route">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/*" element={<User />} />
            <Route path="users/add" element={<AddUsers onAddUser={handleAddUser} />} />
            <Route path="users/:userID" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
