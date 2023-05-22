import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-profil',
  templateUrl: './display-profil.component.html',
  styleUrls: ['./display-profil.component.css']
})
export class DisplayProfilComponent implements OnInit {
  id: any;
  user: any={};
  userForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("x");
    this.userService.getUserInfo(this.id).subscribe(
      (data)=>{
        this.user = data.user;
      }
    );
  }

}
