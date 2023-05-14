import React from "react";
import { Main, Navbar } from "./Components/Containers";
import { useState, useEffect } from "react";
import api from "./api/axiosConfig"


function App() {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    try {
      const res = await api.get("/customers");
      setCustomers(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const addCustomer = async (customer) => {
    try {
      const res = await api.post(`/api/customers/`, customer)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getCustomers()

  }, [])
  console.info(customers[0])



  return (
    <div className="bg-bg-blue w-full h-full flex flex-col">
      <Navbar />
      <Main />
    </div>
  );
}

export default App