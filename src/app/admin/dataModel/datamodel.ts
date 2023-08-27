export type AllTasks = Task[];

export interface Task {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  assignedTo: AssignedTo;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AssignedTo {
  _id: string;
  userName: string;
}

export interface FormSubmission {
  title: string;
  description: string;
  date: string;
  priority: string;
  status: string;
  userName: string;
}
