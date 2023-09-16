import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit{

  username: string='';
  password: any;

  constructor(public router:Router){}

   ngOnInit(): void {
      
   }

   login(){
    if(this.username==='banu' && this.password==='Banu@123' || this.username==='admin' && this.password==='admin123'){
      localStorage.setItem("uname", this.username);
      localStorage.setItem("pwd", this.password);
      this.router.navigate(['home']);
    }
    else{
      alert("Login failed");
      this.username='';
      this.password='';
    }
   }
}
