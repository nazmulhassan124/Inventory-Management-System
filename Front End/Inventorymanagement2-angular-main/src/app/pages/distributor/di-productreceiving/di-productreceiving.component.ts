import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';

@Component({
  selector: 'app-di-productreceiving',
  templateUrl: './di-productreceiving.component.html',
  styleUrls: ['./di-productreceiving.component.css']
})
export class DiProductreceivingComponent implements OnInit{

  
  salesList!: AdSale[];

  constructor( private route: ActivatedRoute,
    private saleDetailsService: AdSalesService,){}

  ngOnInit(): void {
    this.allsales();
   
  }
 



  allsales(){
    const status:String= "SalePending"
    this.saleDetailsService.getAllSalesByStatus(status).subscribe((data: AdSale[])=>{
      this.salesList=data
    })
    
  }

}
