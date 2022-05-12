import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:AuthService, private route:Router,private arouter:ActivatedRoute) {

  }
  login(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
      {
        this.dataReceived=response
        this.asd.saveDataProfil(this.dataReceived.token)
       this.route.navigate(['/user-profile'])
        
      },err=>this.messageAuthError="invalid email and password")

      
      let token:any=JSON.parse(localStorage.getItem('token'))
      console.log(token.id)
      console.log(token.token)
      console.log(token.role)

  }
  //console.log(this.dataReceived.token)


  ngOnInit() {
  }  
  
  ngOnDestroy() {
  }

}
