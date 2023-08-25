import { TaskModel } from '../models/homeModel';

export const TaskState: TaskModel = {
  task: [],
  errorMessage: '',
  singleTaskObj: {
    _id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    status: '',
    assignedTo: { _id: '', userName: '' },
    createdAt: '',
    updatedAt: '',
  },
};
