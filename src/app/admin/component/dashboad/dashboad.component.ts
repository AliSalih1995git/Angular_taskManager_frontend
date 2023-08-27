import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css'],
})
export class DashboadComponent implements OnInit {
  // allTasks!: AllTasks
  allTasks: any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllTask().subscribe({
      next: (res) => {
        this.allTasks = res;
        console.log(res, 'All tasks');
      },
      error: (err) => console.log(err),
    });
  }
}
