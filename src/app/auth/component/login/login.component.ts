import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get AllControles() {
    return this.loginForm.controls;
  }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;

    this.authService.login(formData).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.toastr.success(res.message);
        console.log(res, 'login response');
        let role = res.others.role;
        if (role == 'user') {
          this.router.navigateByUrl('home');
        } else if (role == 'admin') {
          this.router.navigateByUrl('admin');
        }
      },
      error: (error) => {
        this.toastr.error(error.error.message);
        console.error('Error fetching profile data:', error);
      },
    });
  }
}
