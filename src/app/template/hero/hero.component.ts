import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.cliente != null){
    this.sess();
    this.validar();}
  }

cliente = JSON.parse(localStorage.getItem("activeUser"));
ses = false;

validar(){
  if(this.cliente.rol == 3){
    this.router.navigate(['admin/inicio']);
  }
  if(this.cliente.rol == 2){
    this.router.navigate(['asesor']);
  }
 
}



 sess(): void{
  
  if(this.cliente.id != ''){
    this.ses= true;
  }
  else{
    this.ses= false;
  }
}


}
