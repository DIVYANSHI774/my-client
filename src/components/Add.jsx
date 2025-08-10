import { useState } from 'react';
import axios from 'axios';
import '../styles/Add.css';
export function Add() {
  const [empNo, setEmpNo] = useState('');
  const [empName, setEmpName] = useState('');
  const [empSal, setEmpSal] = useState('');

  async function addHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/employees`, { empNo, empName, empSal });
      alert(response.data.message);
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  }

  return (
    <div className="form-container">
      <h2>Employee Details</h2>
      <form onSubmit={addHandler}>
        <input
          type="number"
          placeholder="Enter Employee No"
          onChange={(e) => setEmpNo(e.target.value)}
          value={empNo}
        /><br /><br /><br />
        <input
          type="text"
          placeholder="Enter Employee Name"
          onChange={(e) => setEmpName(e.target.value)}
          value={empName}
        /><br /><br /><br />
        <input
          type="number"
          placeholder="Enter Employee Salary"
          onChange={(e) => setEmpSal(e.target.value)}
          value={empSal}
        /><br /><br /><br />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
