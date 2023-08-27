import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { NgForm } from '@angular/forms';
import { FormSubmission } from '../../dataModel/datamodel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  showModal = false;
  @Input() head!: string;
  @Input() data: any;

  @Output() submitData: EventEmitter<FormSubmission> =
    new EventEmitter<FormSubmission>();

  users!: any;
  statuses = ['to-do', 'in-progress', 'completed'];
  priorities = ['low', 'medium', 'high'];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => console.log(err),
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('please! fill all field');
      return;
    }
    const formData = this.data;
    this.submitData.emit(formData);
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
