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

  constructor(private ds:EmployeServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){}

}
