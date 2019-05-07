import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'src/lib/public_api';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  

  model:any = {};

  
  constructor(
    private myAuthService: AuthService,
    private router: Router, 
    private toastr: ToastrService){}
    
  ngOnInit(): void {  
      
    } 

  onSubmit(){
    this.myAuthService.loin(this.model)
    .subscribe(result => {   
      if(result){
      this.router.navigate(['/home']);
      }
    },
    (error:Response)=>{
      if(error.status === 404)
          this.toastr.error("Error", 'Username or password is incorrect');
      else
          this.toastr.error("Error", 'Unexpected Error occured');
    });
  }


}
