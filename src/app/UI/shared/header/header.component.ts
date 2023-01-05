import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  constructor(private router:Router){}
  logged:boolean=true;
  username!:string | null;
  ngOnInit():void{
    if(localStorage.getItem('token')){
      this.logged=false;
      this.username=localStorage.getItem('username')
    }
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.logged=true;
    this.username='';
    this.router.navigate(['/']);
     

  }

}
