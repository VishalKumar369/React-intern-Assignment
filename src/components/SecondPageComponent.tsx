import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { fetchPosts } from '../services/api';
import { Post } from '../models/Posts';
import DepartmentList from './DepartmentList';
import { columns } from './DataFormat';

const SecondPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

  if (!userDetails.name || !userDetails.phoneNumber || !userDetails.email) {
    // Redirect back to the first page if user details are not provided
    navigate('/');
    return (
      <Container>
        <Typography variant="h6">Please enter your details before accessing the second page.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" marginTop="16px">Welcome to the Second Page</Typography>
      <Typography variant="h6">User Details:</Typography>
      <p>Name: {userDetails.name}</p>
      <p>Phone Number: {userDetails.phoneNumber}</p>
      <p>Email: {userDetails.email}</p>

      <Typography variant="h6" style={{ marginTop: 20 }}>
        Data from the API:
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={posts} columns={columns} initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 5 },
    },
  }} />
      </div>
      <DepartmentList />
    </Container>
  );
};

export default SecondPageComponent;
