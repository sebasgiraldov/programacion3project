import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  constructor (private spinnerService: NgxSpinnerService){

  }
  title = 'client';

  ngOnInit(){
    this.spinner();
 
    
  }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 2000);
  }

  }


