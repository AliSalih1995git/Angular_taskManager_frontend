import { Component, Input, OnInit } from '@angular/core';
import { SingleTask, TaskModel } from '../../models/homeModel';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  @Input() userTaskArray!: SingleTask[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.userTaskArray, 'Each task');
  }
}
