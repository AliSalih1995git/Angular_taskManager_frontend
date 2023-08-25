// export interface SingleTask {
//   _id: string;
//   title: string;
//   description: string;
//   dueDate: string;
//   priority: string;
//   status: string;
//   assignedTo: AssignedTo;
//   createdAt: string;
//   updatedAt: string;
//   __v?: number;
// }

// export interface AssignedTo {
//   _id: string;
//   userName: string;
// }

export interface SingleTask {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  assignedTo: {
    _id: string;
    userName: string;
  };
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface TaskModel {
  task: SingleTask[];
  singleTaskObj: SingleTask;
  errorMessage: string;
}
