import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';

@Component({
  selector: 'app-ad-productlist',
  templateUrl: './ad-productlist.component.html',
  styleUrls: ['./ad-productlist.component.css']
})
export class AdProductlistComponent implements OnInit{
  
  id!: number;
  post!: AdProduct;
  posts: AdProduct[] = [];
  

  constructor(
    public productService: AdProductService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['postId'];
    // this.productService.find(this.id).subscribe((data: AdProduct)=>{
    //   this.post = data;
    // });

    this.productService.getAll().subscribe((data:AdProduct[])=>{
      this .posts=data;
      // console.log(this.posts);
    })

  }
  deletePost(id:number){
    this.productService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.product_id !== id);
         console.log('Post deleted successfully!');
    })
    // this.ngOnInit();
  }

}
