import React from "react";
import { InvoiceTable } from "../components";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <InvoiceTable />
      <Container sx={{ margin: '2%' }}>
        <Button sx={{ margin: '2%' }} variant="contained" color="secondary">
          <Link to={'/api'} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
            Mock API's
          </Link>
        </Button>
        <Button sx={{ margin: '2%' }} variant="contained" color="secondary">
          <Link to={'/loading'} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
            Loading
          </Link>
        </Button>
        <Button sx={{ margin: '2%' }} variant="contained" color="secondary">
          <Link to={'/disable'} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
            Disable
          </Link>
        </Button>
        <Button sx={{ margin: '2%' }} variant="contained" color="secondary">
          <Link to={'/task'} style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
            Taks
          </Link>
        </Button>
        {/* <Button  sx={{margin: '2%'}} variant="contained" color="secondary">
            
          </Button> */}
      </Container>
    </>
  );
};

export default Home;
