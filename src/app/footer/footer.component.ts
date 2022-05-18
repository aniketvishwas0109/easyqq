import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
  }
   // When the user clicks on the button, scroll to the top of the document
  //   topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  topFunction(){
    window.scrollTo(0, 0);
    document.body.scrollTop = document.documentElement.scrollTop = 0;

  }
  scrollFunction(){
    
  }
  ngOnInit(): void {
  }

}
