import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/service/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  toggleVisible: boolean = true;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  logoutHandler() {
    this.homeService.logout();
  }
  handleToggle() {
    console.log(this.toggleVisible);

    this.toggleVisible = !this.toggleVisible;
  }
}
