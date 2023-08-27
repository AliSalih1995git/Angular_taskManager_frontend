import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './service/home.service';
import { Store } from '@ngrx/store';
import { loadusertaskAction } from './store/Home.Actions';
import { getusertaskdata } from './store/Home.Selectors';
import { SingleTask } from './models/homeModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private store: Store) {}
  toggleVisible: boolean = true;
  userTaskArray!: SingleTask[];

  ngOnInit(): void {
    this.store.dispatch(loadusertaskAction());
    this.store.select(getusertaskdata).subscribe((res) => {
      this.userTaskArray = res;
      console.log(this.userTaskArray, 'usertaskArray');
    });
  }

  logoutHandler() {
    this.homeService.logout();
  }
  handleToggle() {
    console.log(this.toggleVisible);

    this.toggleVisible = !this.toggleVisible;
  }
}
