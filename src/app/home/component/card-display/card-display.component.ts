import { Component, Input, OnInit } from '@angular/core';
import { format } from 'timeago.js';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
})
export class CardDisplayComponent implements OnInit {
  @Input() task: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.task, 'card -diplay');
  }

  formatTimestamp(timestamp: number): string {
    return format(timestamp);
  }
}
