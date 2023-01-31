import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adstockinvoice } from 'src/app/model/admin/ad-stockininvoice.model';

@Injectable({
  providedIn: 'root'
})
export class AdStockinInvoiceService {


  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/stockinvoice'; 


  getAll() {  
    return this.http.get<Adstockinvoice[]>(this.baseUrl);  
  }  
                                                                                       

}
