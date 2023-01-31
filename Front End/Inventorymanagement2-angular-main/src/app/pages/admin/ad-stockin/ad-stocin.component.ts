import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';

@Component({
  selector: 'app-ad-stocin',
  templateUrl: './ad-stocin.component.html',
  styleUrls: ['./ad-stocin.component.css']
})
export class AdStocinComponent implements OnInit {
  id!: number;
  post!: AdProduct;
  posts: AdProduct[] = [];
  addForm!:FormGroup;
  post2!: AdProduct;
  
  constructor(
    public productService: AdProductService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  ngOnInit(): void {
    this.productService.getAll().subscribe((data:AdProduct[])=>{
      this .posts=data;
      // console.log(this.posts);
    })
    
  }
  
  editEmp( product: AdProduct): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.product_id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.productService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      
    }  

  }  

list(product: AdProduct):void{
  // this.productService.find(product.id);
  this.productService.find(product.product_id).subscribe((data: AdProduct)=>{
    this.post2 = data;
  });
}
selectedPost!: number ;

post4!: AdProduct;



abc: string = '';
abc2: string = '';
abc3: string = '';


abcd (event: any){ 
  this.selectedPost = event.target.value;
  console.log("Product Added"+ this.selectedPost);

  this.productService.find(this.selectedPost).subscribe((data:AdProduct)=>{
    this .post4=data;
    this.abc = this.post4.product_name;
    this.abc2 = this.post4.product_unit;
    this.abc3 = this.post4.product_brand;
    // console.log(this.posts);
  })

}

}
