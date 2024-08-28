import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const ProjectList = ({ setConditionalComponent }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "ABC Project",
      teamLead: "John Doe",
      startDate: "2022-01-01",
      description: "Project Description"
    },
    {
      id: 2,
      name: "XYZ Project",
      teamLead: "John Doe",
      startDate: "2022-01-01",
      description: "Project Description"
    },
  ]);

  useEffect(() => {
    console.log('Project List Data Fetched:', projects);
  }, [projects]);

  return (
    <Container
      style={{
        background: "#f8f9fa",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
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
        <h2 style={{ margin: 0, color: "#333", fontWeight: "bold" }}>Project List</h2>
        <Button
          style={{
            backgroundColor: "#17a2b8",  // Teal color
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "bold",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#138496";  // Darker teal on hover
            e.target.style.transform = "scale(1.05)";    // Slight scale-up on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#17a2b8";  // Original teal when not hovering
            e.target.style.transform = "scale(1)";       // Reset scale when not hovering
          }}
          onClick={() => setConditionalComponent("projectform")}
        >
          Add New Project
        </Button>
      </div>

      <Row className="justify-content-md-center mt-5">
        <Col md={12}>
          <Table
            striped
            bordered
            hover
            style={{
              backgroundColor: "#fff",
              color: "#333",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <thead
              style={{
                backgroundColor: "#343a40", // Darker gray header
                color: "#fff",
                textAlign: "center",  // Center align header text
                fontSize: "1.1rem",
              }}
            >
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Team Lead</th>
                <th>Start Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} style={{ textAlign: "center" }}> {/* Center align table text */}
                  <td>{index + 1}</td>
                  <td>{project.name}</td>
                  <td>{project.teamLead}</td>
                  <td>{project.startDate}</td>
                  <td>{project.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectList;
