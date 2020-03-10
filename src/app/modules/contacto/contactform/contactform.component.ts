import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  fgValidation : FormGroup;
  tempo: UserModel;

  constructor(private fb: FormBuilder, private cntService: ContactService, private router: Router) { }

  ngOnInit() {
    this.fgValidationBuilder();
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      name:['',[Validators.required]],
      message:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      subject:['', [Validators.required]]
      ,
    });
    console.log(this.fgValidation)
  }


  contactEvent(){
    if(this.fgValidation.invalid){
      alert("invalid Data");
    }else{
      let n = this.fg.name.value;
      let s = this.fg.subject.value;
      let m = this.fg.message.value;
      let e = this.fg.email.value;
      this.cntService.obtenerEmail().subscribe(dat =>{
        this.tempo = dat
        this.cntService.enviarEmail(n,m,s,e, this.tempo.email).subscribe(data => {
          if(data != null){
            console.log(data);
            this.router.navigate(['/home']);
          }
        })
      });
      
    }
  }

  get fg(){
    return this.fgValidation.controls;
    }

}
