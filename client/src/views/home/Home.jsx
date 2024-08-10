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


         <div className='p-3  bg-primary'>
           this is the home page change for the code debugging
           
         </div>
        

      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',

  },
  linksContainer: {
    marginTop: '20px',

  },
  link: {
    padding: '10px 20px',
   
  },
};

export default Home;
