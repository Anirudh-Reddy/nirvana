import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  public loginForm:FormGroup = new FormGroup({});
  public submitted = false;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required],
    })
  }

  get form() { return this.loginForm.controls; }

  handleLogin(){
    this.submitted = true;
    console.log('aa')
    if(!this.loginForm.valid){
      alert("Form Invalid");
      return;
    }
    const credObj = {
      email: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }
    this.auth.login(credObj).subscribe({
      next:res=>{
        console.log('login successfull');
        this.router.navigate(['admin/cms']);
      },
      error:err=>console.log("Error while logging in: ",err)
    })
  }
}
