import { Component, OnInit } from '@angular/core';
import { FormSubmission } from '../../dataModel/datamodel';
import { AdminService } from '../../service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {}
  taskId: string = '';
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('taskId');
    if (getParamId !== null) {
      this.taskId = getParamId;
    }
    this.getEditUserData();
  }
  data = {
    title: '',
    description: '',
    date: '',
    priority: '',
    status: '',
    userName: '',
  };
  getEditUserData() {
    this.adminService.singleTask(this.taskId).subscribe({
      next: (res) => {
        this.data = {
          title: res.title,
          description: res.description,
          date: res.dueDate,
          priority: res.priority,
          status: res.status,
          userName: res.assignedTo.userName,
        };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSubmit(formData: FormSubmission) {
    console.log(this.taskId, 'TASK ID', formData);

    this.adminService.updateTask(this.taskId, formData).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        this.route.navigateByUrl('/admin');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error.message);
      },
    });
  }
}
