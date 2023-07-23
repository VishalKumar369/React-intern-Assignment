import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import SecondPageComponent from '../components/SecondPageComponent';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

  if (!userDetails.name || !userDetails.phoneNumber || !userDetails.email) {
    // Redirect back to the first page if user details are not provided
    navigate('/');
    return (
      <Container>
        <p>Please enter your details before accessing the second page.</p>
      </Container>
    );
  }

  return (
    <Container>
      <SecondPageComponent />
    </Container>
  );
};

export default SecondPage;
