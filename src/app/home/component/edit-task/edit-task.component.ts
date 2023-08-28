import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  showModal: boolean = true;
  selectedstatus!: string;
  taskId!: string;
  statuses = ['to-do', 'in-progress', 'completed'];
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private homeService: HomeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('taskId');
    if (getParamId !== null) {
      this.taskId = getParamId;
    }
    this.getEditUserData();
  }

  getEditUserData() {
    this.homeService.singleTask(this.taskId).subscribe({
      next: (res) => {
        console.log(res, 'edit userdata');
        this.selectedstatus = res.status;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleModal() {
    this.route.navigateByUrl('/home');
  }

  onSubmit(taskForm: NgForm) {
    if (taskForm.valid) {
      console.log('Form data:', this.selectedstatus);
      this.homeService
        .updateStatus(this.taskId, { status: this.selectedstatus })
        .subscribe({
          next: (res) => {
            this.toastr.success(res.message);
            this.route.navigateByUrl('/home');
          },
          error: (err) => console.log(err),
        });
    }
  }
}
