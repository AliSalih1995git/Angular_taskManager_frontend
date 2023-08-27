import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'timeago.js';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css'],
})
export class CardDisplayComponent implements OnInit {
  @Input() task: any;
  @Input() url!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.task, 'card -diplay');
  }

  formatTimestamp(timestamp: number): string {
    return format(timestamp);
  }

  onSubmit(id: number) {
    console.log(`${this.url}/${id}`, 'urlllllllllll');

    this.router.navigateByUrl(`${this.url}/${id}`);
  }
}
