import { Department } from "../models/Posts";

// Hardcoded JSON data for departments and sub-departments
export const departmentData: Department[] = [
    {
      id: 1,
      name: 'Customer Services',
      subDepartments: [
        { id: 11, name: 'Support', selected:false},
        { id: 12, name: 'Customer Success' ,selected:false},
      ],
    },
    {
      id: 2,
      name: 'Design',
      subDepartments: [
        { id: 21, name: 'Graphics Design',selected:false },
        { id: 22, name: 'Product Design',selected:false },
        { id: 23, name: 'Web Design',selected:false },
      ],
    },
  ];