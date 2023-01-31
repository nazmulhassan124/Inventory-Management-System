import { Component,OnInit } from '@angular/core';
import { Adstockinvoice } from 'src/app/model/admin/ad-stockininvoice.model';
import { AdStockinInvoiceService } from 'src/app/service/admin/ad-stockin-invoice.service';

@Component({
  selector: 'app-ad-stockin-invoice',
  templateUrl: './ad-stockin-invoice.component.html',
  styleUrls: ['./ad-stockin-invoice.component.css']
})
export class AdStockinInvoiceComponent implements OnInit{
 
  products !: Adstockinvoice[];
  constructor(  private stockinService: AdStockinInvoiceService) { }

  ngOnInit(): void { 
    this.getall()
  }
 getall(){
    this.stockinService.getAll().subscribe((data:Adstockinvoice[])=>{
      this.products= data;
    });
  }



}
