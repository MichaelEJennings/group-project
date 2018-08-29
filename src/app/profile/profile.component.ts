import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  fn: HTMLElement;
  un: HTMLElement;

  constructor(    
    private userService: UserService,
    private router: Router) {
      console.log("constructor");
    }

  back(){
    this.router.navigate(['/home'])
  }

  edit(){
    this.hideObj(true);
  }

  save(){

    this.fn.innerHTML = this.user.firstName + ' ' + this.user.lastName
    this.un.innerHTML = this.user.userName;
    this.hideObj(false);

  }

  hideObj(value){
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");

    if (value)
    {

      var spt 
      spt = this.fn.innerText.split(' ');
     
      this.user.firstName = spt[0];
      this.user.lastName = spt[1];
      this.user.userName = this.un.innerText;
      
      card1.classList.add("hidebtn");
      card2.classList.remove("hidebtn");
    }
    else
    {
      this.userService.updateUser(this.user);
      card1.classList.remove("hidebtn");
      card2.classList.add("hidebtn");
    }
  }



  ngOnInit() {
    this.user = {}
    console.log("ngOnInit");
    this.fn = document.getElementById('fullname');
    this.un = document.getElementById('userName');

    this.fn.innerHTML = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
    this.un.innerHTML = localStorage.getItem('userName');
  }

}
