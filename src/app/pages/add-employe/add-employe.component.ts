import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import {  EmployeServiceService } from '../../services/employe-service.service';


@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.scss']
})
export class AddEmployeComponent implements OnInit {

  messageErr="";
  m="";
  constructor(private ds:EmployeServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){let data=f.value
    console.log(data)
    this.ds.addEmploye(data).subscribe(response=>{
    console.log(response)

      this.route.navigate(['/GererEmployes'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      this.m=this.messageErr['error']
       console.log(this.messageErr)
       console.log(err.status)
    })
  }

}
