import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'src/lib/public_api';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  model: any = {};

  constructor(
    private myAuthService: AuthService,
    private router: Router, 
    private _route: ActivatedRoute,
    private toastr: ToastrService
    ){}

  onSubmit(){
    console.log(this.model);
    this.myAuthService.signup(this.model).subscribe(result => {
      if(result){   
        this.toastr.success("Success", 'User Created');

      this.router.navigate(['/login']);
      }
    },
    (error:Response)=>{
      if(error.status === 401)
          this.toastr.error("Error", 'Server failed');
      else
      this.toastr.error("Error", 'Unexpected Error occured');
    });
  }

}
