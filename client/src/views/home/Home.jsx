

import { Link } from 'react-router-dom';

const Home = () => {

  

  return (

    <div style={styles.container}>
      <h1>Welcome to GBIS Taskmangment Portal</h1>
      <div style={styles.linksContainer}>

        <Link to="/client/login" style={styles.link}>
          Client Login
        </Link>
        <Link to="/employee/login" style={styles.link}>
          Employee Login
        </Link>
        <Link to="/admin/login" style={styles.link}>
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

  },
  linksContainer: {
    marginTop: '20px',

  },
  link: {
    padding: '10px 20px',
   
  },
};

export default Home;

