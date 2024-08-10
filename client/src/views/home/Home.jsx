import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our Portal</h1>
      <div style={styles.linksContainer}>
        <Link to="/client-login" style={styles.link}>
          Client Login
        </Link>
        <Link to="/employee-login" style={styles.link}>
          Employee Login
        </Link>
        <Link to="/admin-login" style={styles.link}>
          Admin Login
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  linksContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    width: '300px',
  },
  link: {
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    textAlign: 'center',
  },
};

export default Home;
