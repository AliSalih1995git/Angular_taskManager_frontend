import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { FormSubmission } from '../../dataModel/datamodel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  data = {
    title: '',
    description: '',
    date: '',
    priority: '',
    status: '',
    userName: '',
  };

  onSubmit(formData: FormSubmission) {
    console.log('Add task Submitted Form Data:', formData);
    this.adminService.createtask(formData).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        this.router.navigateByUrl('/admin');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error.message);
      },
    });
  }
}
