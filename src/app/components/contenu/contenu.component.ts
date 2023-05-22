import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {
title:string='login';
actuelDate: any = new Date();
  errorMsg: string;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],

    })


  }
  login() {
this.userService.login(this.loginForm.value).subscribe(
  (data)=>{
    if (data.message == "2") { 
      localStorage.setItem("userId",data.user.id);
      localStorage.setItem("userRole",data.user.role);
      (data.user.role == "admin")?
      this.router.navigate([`admin`]):
      this.router.navigate([`displayProfil/${data.user.id}`]);
      
    } else {
      this.errorMsg="Please check email/pwd"
    }
  }
);

  }
}
