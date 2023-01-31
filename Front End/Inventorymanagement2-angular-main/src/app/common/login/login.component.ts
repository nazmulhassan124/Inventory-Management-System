
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdLogin } from 'src/app/model/admin/ad-login.model';
import { AdLoginvalidationService } from 'src/app/service/admin/ad-loginvalidation.service';
import { AdLoginRegistration } from 'src/app/model/admin/ad-loginregistration.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  adminbutton: boolean = true;
  warehousebutton: boolean = false;
  distributorbutton: boolean = false;

  addForm!:FormGroup;

  products !: AdLogin[];




constructor( private router : Router , public loginService: AdLoginvalidationService){
  
}


  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password2: new FormControl('', Validators.required)
    });
   
  }
 
abc!: AdLoginRegistration;

  login(){
    //console.log(this.addForm.value);
    this.loginService.submit(this.addForm.value).subscribe((res:any) => {
      this.abc=res;
      if(this.abc!=null){
        console.log('Post created successfully!');             //   , this.abc ) can use for print
        this.router.navigateByUrl('/ad-home');
      }else{ 
        console.log("Login Failed");
      }
    
 });
  
  
  }









// login(){
//   if(this.loginObj.userName=='Admin' && this.loginObj.password=='123'){
//   this.router.navigateByUrl('ad-home');
//     }else if(this.loginObj.userName=='Admin' && this.loginObj.password=='456'){
//       this.router.navigateByUrl('ware-home');

//     }else if(this.loginObj.userName=='Admin' && this.loginObj.password=='789'){
//       this.router.navigateByUrl('dis-home');

//     }else{ alert('Wrong Password')}
  
// }






admin(){
this.router.navigateByUrl('home');

}

}



