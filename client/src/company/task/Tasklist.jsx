import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const TaskList = ({ setConditionalComponent }) => {
  const [tasks, setTasks] = useState([
    {
      companyName: "ABC Company",
      priority: "High",
      saptype: "SAP ABAP",
      taskDetail: "Task Detail",
      ticketCreateDate: "2022-01-01",
      dueDate: "2022-01-01",
      assignName: "John Doe"
      // assignteam: "ABC Team"
    },
    {
      companyName: "XYZ Company",
      priority: "Medium",
      saptype: "SAP ABAP",
      taskDetail: "Task Detail",
      ticketCreateDate: "2022-01-01",
      dueDate: "2022-01-01",
      assignName: "John Doe"
      // assignteam: "ABC Team"
    },
  ]);

  useEffect(() => {
    console.log('Task List Data Fetched:', tasks);
  }, [tasks]);

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
        <h2 style={{ margin: 0, color: "#333", fontWeight: "bold" }}>Task List</h2>
        <Button
          style={{
            backgroundColor: '#17a2b8',  // Teal color
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#138496';  // Darker teal on hover
            e.target.style.transform = 'scale(1.05)';    // Slight scale-up on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#17a2b8';  // Original teal when not hovering
            e.target.style.transform = 'scale(1)';       // Reset scale when not hovering
          }}
          onClick={() => setConditionalComponent("addTask")}
        >
          Add New Task
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
                <th>Ticket Name</th>
                <th>Priority</th>
                <th>SAP Type</th>
                <th>Task Detail</th>
                <th>Ticket Creation Date</th>
                <th>Due Date</th>
                <th> Name</th>
                <th>Assign To Team</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} style={{ textAlign: "center" }}> {/* Center align table text */}
                  <td>{index + 1}</td>
                  <td>{task.companyName}</td>
                  <td>{task.priority}</td>
                  <td>{task.saptype}</td>
                  <td>{task.taskDetail}</td>
                  <td>{task.ticketCreateDate}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.assignName}</td>
                  <td>{task.assignteam}</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: 'transparent', // No background color
                        border: 'none', // No border
                        color: '#17a2b8', // Teal color for text
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease, transform 0.2s ease',
                        padding: '8px 16px',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#138496'; // Darker teal on hover
                        e.target.style.transform = 'scale(1.05)'; // Slight scale-up on hover
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#17a2b8'; // Original teal when not hovering
                        e.target.style.transform = 'scale(1)'; // Reset scale when not hovering
                      }}
                    >
                      Modify
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
