import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private ohmeService: HomeService) {}
  toggleVisible: boolean = true;

  ngOnInit(): void {}

  logoutHandler() {
    this.ohmeService.logout();
  }
  handleToggle() {
    console.log(this.toggleVisible);

    this.toggleVisible = !this.toggleVisible;
  }
}
