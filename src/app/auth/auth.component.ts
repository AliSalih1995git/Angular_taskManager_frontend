import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from './utilitys/loginInterface';
import { AuthService } from './service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  submitted: boolean = false;

  error!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  registerForm = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  get AllControles() {
    return this.registerForm.controls;
  }
  get passwordValidation() {
    return this.registerForm.get('password');
  }

  onSubmit(value: any) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    const formData = this.registerForm.value;

    this.authService.register(formData).subscribe((res) => {
      console.log(res, 'register');

      this.toastr.success(res.message);
      this.router.navigateByUrl('/login');
    });
  }
}
