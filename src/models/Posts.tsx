export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export interface Department {
//   id: number;
//   name: string;
//   subDepartments: SubDepartment[];
//   selected: boolean;
// }

// export interface SubDepartment {
//   id: number;
//   name: string;
//   selected: boolean;
// }


export interface SubDepartment {
  id: number;
  name: string;
  selected:boolean;
}

export interface DepartmentListProps {
  departments: Department[];
}
export interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}