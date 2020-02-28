import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private secService: SecurityService, private router: Router,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.secService.logoutUser();
    this.router.navigate(['/user/logout']);
    this.spinner();
  }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 1500);
  }
}
