import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { user } from '../../dataModel/datamodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css'],
})
export class EmployeeManagementComponent implements OnInit {
  users: user[] = [];
  searchTerm!: string;

  constructor(
    private adminSerce: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminSerce.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => console.log(err),
    });
  }

  handleblock(id: string) {
    this.adminSerce.bloack(id).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        let updated = this.users.map((u) => {
          if (u._id === res.user._id) {
            return { ...u, blocked: res.user.blocked };
          }
          return u;
        });
        this.users = updated;

        console.log(res, 'block');
      },
      error: (err) => console.log(err),
    });
  }

  handleunblock(id: string) {
    this.adminSerce.unblock(id).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        let updated = this.users.map((u) => {
          if (u._id === res.user._id) {
            return { ...u, blocked: res.user.blocked };
          }
          return u;
        });
        this.users = updated;

        console.log(res, 'block');
      },
      error: (err) => console.log(err),
    });
  }

  handleDelete(id: string) {
    this.adminSerce.deleteUser(id).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        console.log(res, 'delete');
        let updated = this.users.filter((u) => u._id !== res.user._id);
        this.users = updated;
      },
      error: (err) => console.log(err),
    });
  }
}
