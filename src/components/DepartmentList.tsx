import React, { useState } from 'react';
import { Typography, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Department } from '../models/Posts';
import { departmentData } from '../utils/DepData';

const DepartmentList: React.FC = () => {
  // State to keep track of selected items
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  // State to keep track of expanded departments
  const [expandedDepartments, setExpandedDepartments] = useState<number[]>([]);

  // Function to toggle selection of an item
  const handleToggle = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems((prevSelected) => prevSelected.filter((item) => item !== itemId));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, itemId]);
    }
  };

  // Function to check if a department is fully selected 
  const isDepartmentSelected = (department: Department) => {
    return department.subDepartments.every((subDep) => selectedItems.includes(subDep.id)) && selectedItems.includes(department.id);
  };

  // Function to check if a department is expanded
  const isDepartmentExpanded = (departmentId: number) => {
    return expandedDepartments.includes(departmentId);
  };

  // Function to toggle the selection of a department 
  const handleDepartmentToggle = (department: Department) => {
    const subDepartmentIds = department.subDepartments.map((subDep) => subDep.id);

    if (isDepartmentSelected(department)) {
      setSelectedItems((prevSelected) => prevSelected.filter((item) => !subDepartmentIds.includes(item) && item !== department.id));
    } else {
      setSelectedItems((prevSelected) => [...prevSelected, department.id, ...subDepartmentIds]);
    }
  };

  // Function to toggle the expansion of a department
  const handleDepartmentExpandToggle = (departmentId: number) => {
    setExpandedDepartments((prevExpanded) =>
      prevExpanded.includes(departmentId)
        ? prevExpanded.filter((item) => item !== departmentId)
        : [...prevExpanded, departmentId]
    );
  };

  return (
    <div style={{margin:"36px 0px"}}>
      <Typography variant="h6" marginY="32px">Department List</Typography>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Sub-Departments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departmentData.map((department) =>(
              <React.Fragment key={department.id}>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={isDepartmentSelected(department)}
                      indeterminate={!isDepartmentSelected(department) && department.subDepartments.some((subDep) => selectedItems.includes(subDep.id))}
                      onChange={() => handleDepartmentToggle(department)}
                    />
                    <span style={{cursor:"pointer"}} onClick={() => handleDepartmentExpandToggle(department.id)}>
                      {isDepartmentExpanded(department.id) ? '[-] ' : '[+] '}
                    </span>
                    {department.name}
                  </TableCell>
                  <Table>
                    {isDepartmentExpanded(department.id) && department.subDepartments.map((subDep) => (
                      <div key={subDep.id}>
                        <Checkbox
                          checked={selectedItems.includes(subDep.id)}
                          onChange={() => handleToggle(subDep.id)}
                        />
                        {subDep.name}
                      </div>
                    ))}
                  </Table>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DepartmentList;
