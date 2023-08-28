import { Component, Input, OnInit } from '@angular/core';
import { SingleTask, TaskModel } from '../../models/homeModel';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  @Input() userTaskArray!: SingleTask[];
  status1: string = 'to-do';
  status2: string = 'in-progress';
  status3: string = 'completed';

  constructor() {}

  ngOnInit(): void {
    console.log(this.userTaskArray, 'Each task');
  }
}
