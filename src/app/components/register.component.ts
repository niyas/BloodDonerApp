import { environment } from './../../environments/environment';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IMyDpOptions } from 'mydatepicker';
import { ActivatedRoute, Router } from '@angular/router';

import { DonerService } from '../services/doner.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'register',
  templateUrl: '../templates/register.html',
  providers: [
    DonerService,
    UserService
  ]
})

export class RegisterComponent {
  constructor(private donerService: DonerService, private userService: UserService, private route: ActivatedRoute, private router: Router) {

  }
  email: string = environment.email;
  password: string = environment.password;

  doner = {
    FirstName: '',
    LastName: '',
    Age: '',
    Gender: '',
    BloodGroup: '',
    DateOfBirth: '',
    Weight: '',
    Address1: '',
    City: '',
    State: '',
    Mobile: '',
    PreferredLocation: '',
    LastDonatedDate: '',
  };

  //Method to create a doner
  public createDoner(data: any): void {
    let payload = {
      "FirstName": data.FirstName,
      "LastName": data.LastName,
      "DateOfBirth": data.DateOfBirth ? data.DateOfBirth.formatted : '',
      "Age": data.Age,
      "Weight": data.Weight,
      "Mobile": data.Mobile,
      "Gender": data.Gender,
      "Address1": data.Address,
      "City": data.City,
      "State": data.State,
      "BloodGroup": data.BloodGroup,
      "PreferredLocation": data.PreferredLocation,
      "LastDonatedDate": data.LastDonatedDate? data.LastDonatedDate.formatted : '',
      "Comments": data.comments || '' ,
      "isActive": true,
      "isApproved": false
    };

    var loginPayload = {
      "email": this.email,
      "password": this.password
    };

    this.userService.login(loginPayload).subscribe(loginData => {
      this.donerService.createDoner(payload, loginData.id).subscribe(data => {
        //this.router.navigate(['tickets', this.assignee]);
        console.log(data);
      });
    });
     
    }
    

  //Set date format for datepicker
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

}

