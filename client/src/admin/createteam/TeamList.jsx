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

      <Row className="justify-content-md-center mt-5">
        <Col md={12}>
          
          {teams.length > 0 ? (
            <Table
              striped
              bordered
              hover
              style={{
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                }}
              >
                <tr>
                  <th>#</th>
                  <th>Team Name</th>
                  <th>Team Lead</th>
                  <th>Team Members</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{team.name}</td>
                    <td>{team.lead}</td>
                    <td>{team.members.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p style={{ color: "#333" }}>No teams registered yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TeamList;
