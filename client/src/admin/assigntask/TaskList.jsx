import React, { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

const TaskList = ({ setValue }) => {
  const [tasks, setTasks] = useState([
    {
      projectName: "Project 1",
      task: "Task 1",
      companyName: "Company 1",
      teamLead: "Lead 1",
      description: "Description 1",
    },
    {
      projectName: "Project 2",
      task: "Task 2",
      companyName: "Company 2",
      teamLead: "Lead 2",
      description: "Description 2",
    },
    {
      projectName: "Project 3",
      task: "Task 3",
      companyName: "Company 3",
      teamLead: "Lead 3",
      description: "Description 3",
    },
  ]);

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
        <h2 style={{ margin: 0, color: "#333" }}>Assigned Tasks</h2>
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
          onClick={() => setValue("assigntask")}
        >
          Add New Task
        </Button>
      </div>
      <Row className="justify-content-md-center">
        <Col md={12}>
          {tasks.length > 0 ? (
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
                  <th>Project Name</th>
                  <th>Task</th>
                  <th>Company Name</th>
                  <th>Team Lead</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.projectName}</td>
                    <td>{task.task}</td>
                    <td>{task.companyName}</td>
                    <td>{task.teamLead}</td>
                    <td>{task.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p style={{ color: "#333" }}>No tasks assigned yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
