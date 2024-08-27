import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const TeamList = ({ setValue }) => {
  const [teams, setTeams] = useState([
    { name: "Team 1", lead: "John", members: ["John", "Jane"] },
    { name: "Team 2", lead: "Jane", members: ["John", "Jane"] },
    { name: "Team 3", lead: "John", members: ["John", "Jane"] },
  ]);

  const employee = useSelector((state) => state.employeeReducer.employee);

  console.log("Employee data =>  ", employee);

  return (
    <Container
      style={{
        background: "#f0f4f8",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
        color: "#333",
        maxWidth: "95%",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h2 style={{ margin: 0, color: "#333" }}>Teams List</h2>
        <Button
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#45a049")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#4CAF50")
          }
          onClick={() => setValue("createteam")}
        >
          Add New Team
        </Button>
      </div>

};

export default TeamList;
