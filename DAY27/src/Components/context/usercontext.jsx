import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Created a context
const UserContext = createContext({
  data: [],
  name: "",
  email: "",
  phone: "",
  setData: () => {},
  setName: () => {},
  setEmail: () => {},
  setPhone: () => {},
  AddtoTable: () => {},
  handleFormSubmit: () => {},
  handleUpdate: () => {},
  handleDelete: () => {},
});

// Mock API provided 
const API = "https://jsonplaceholder.typicode.com/users"; 

export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const AddtoTable = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  let navigate = useNavigate(); 

  // Function to add new users
  const handleFormSubmit = (e, userData) => {
    e.preventDefault(); // Prevent blank fields
  
    if (!name || !email || !phone) {
      
      alert("Please fill in all fields."); 
      return; 
    }
  
    axios
      .post(API, userData) 
      .then((response) => {
        console.log(response); 
        AddtoTable(response.data); 
        navigate("/ListPages"); 
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
  
    // Reset input fields
    setName("");
    setEmail("");
    setPhone("");
  };
  

  // Function to Update an entry
  const handleUpdate = (id, updatedData) => {
    setData((prevData) =>
      prevData.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
    );
  };

  // Function for Deleting a entry
  const handleDelete = (id) => {
    axios
      .delete(`${API}/${id}`) // Sending delete request
      .then(() => {
        setData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log("Error:", error); 
      });
  };

  // Fetching using useEffect
  useEffect(() => {
    axios
      .get(API) // Sending GET Request
      .then((response) => {
        console.log(response); 
        setData(response.data); 
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
  }, []);

  // Context value to be passed
  const value = {
    data,
    name,
    email,
    phone,
    setName,
    setData,
    AddtoTable,
    handleFormSubmit,
    setEmail,
    setPhone,
    handleUpdate,
    handleDelete,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
