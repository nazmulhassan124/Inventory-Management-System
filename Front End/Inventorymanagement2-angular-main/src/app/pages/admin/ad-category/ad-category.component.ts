import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-category',
  templateUrl: './ad-category.component.html',
  styleUrls: ['./ad-category.component.css']
})
export class AdCategoryComponent  implements OnInit {



  
  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 
  
  addForm!:FormGroup;
  
  
  ngOnInit(): void {
   
  }

  


  addWarehouse(){};
  updateWarehouse(){};

}
