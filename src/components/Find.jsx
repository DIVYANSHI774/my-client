import axios from "axios";
import { useState } from "react";
import '../styles/Find.css';

export function Find() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState(null);

  async function getData(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/employees/${id}`);
      setEmployee(response.data);
    } catch (err) {
      setEmployee(null);
      alert("Employee Not Found : " + err.message);
    }
  };

  return (
    <div>
      <h3>Find Record By ID</h3>
      <hr />
      <form onSubmit={getData}>
        <input
          type="text"
          placeholder="Enter Id"
          value={id}
          onChange={e => setId(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Find Data</button>
      </form>
      <br />
      {employee && (
        <div>
          <h4>Employee Details</h4>
          <hr />
          <p>Emp No is : {employee.empNo}</p>
          <p>Emp Name is : {employee.empName}</p>
          <p>Emp Sal is : {employee.empSal}</p>
        </div>
      )}
    </div>
  )
}
