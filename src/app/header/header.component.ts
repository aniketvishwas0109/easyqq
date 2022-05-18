import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // Here is a selector !
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  menuVariable:boolean = false;
  menu_icon_variable:boolean = false ;
  openMenu(){
    // this.menuVariable = true ; // when user click menu open but we have to do vice versa for closing list so look below 
    this.menuVariable =! this.menuVariable ; //If 1.true chenge to false 2.if false change to true 
    this.menu_icon_variable =! this.menu_icon_variable ; //menu icon shrinks and vice versa
  }

  reloadPage(){
    // window.location.reload();
    location.reload();
    // $route.reload();
  }

  ngOnInit(): void {
  }

}
