import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './common/test/test.component';

import { AdDashboardComponent } from './pages/admin/ad-dashboard/ad-dashboard.component';
import { AdHomeComponent } from './pages/admin/ad-home/ad-home.component';
import { AdProductComponent } from './pages/admin/ad-product/ad-product.component';
import { AdSupplierComponent } from './pages/admin/ad-supplier/ad-supplier.component';
import { AdCustomerComponent } from './pages/admin/ad-customer/ad-customer.component';
import { WareHomeComponent } from './pages/warehouse/ware-home/ware-home.component';
import { WareDashboardComponent } from './pages/warehouse/ware-dashboard/ware-dashboard.component';
import { DisHomeComponent } from './pages/distributor/dis-home/dis-home.component';
import { DisDashboardComponent } from './pages/distributor/dis-dashboard/dis-dashboard.component';
import { AdProductStockComponent } from './pages/admin/ad-product-stock/ad-product-stock.component';
import { AdReceivingComponent } from './pages/admin/ad-receiving/ad-receiving.component';
import { AdSalesComponent } from './pages/admin/ad-sales/ad-sales.component';
import { AdStocinComponent } from './pages/admin/ad-stockin/ad-stocin.component';
import { AdSalesReportComponent } from './pages/admin/ad-sales-report/ad-sales-report.component';
import { AdStaffComponent } from './pages/admin/ad-staff/ad-staff.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AdProductlistComponent } from './views/admin/ad-productlist/ad-productlist.component';
import { RegisterComponent } from './common/register/register.component';
import { AdStockinInvoiceComponent } from './pages/admin/ad-stockin-invoice/ad-stockin-invoice.component';
import { AdWarehouseComponent } from './pages/admin/ad-warehouse/ad-warehouse.component';
import { AdDistributorComponent } from './pages/admin/ad-distributor/ad-distributor.component';
import { AdCategoryComponent } from './pages/admin/ad-category/ad-category.component';
import { AdSubcategoryComponent } from './pages/admin/ad-subcategory/ad-subcategory.component';
import { AdBrandComponent } from './pages/admin/ad-brand/ad-brand.component';
import { AdLoginreglistComponent } from './views/admin/ad-loginreglist/ad-loginreglist.component';
import { ProductlistBrandComponent } from './views/admin/productlist-brand/productlist-brand.component';
 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    TestComponent,
  
    AdDashboardComponent,
    AdHomeComponent,
    AdProductComponent,
    AdSupplierComponent,
    AdCustomerComponent,
    WareHomeComponent,
    WareDashboardComponent,
    DisHomeComponent,
    DisDashboardComponent,
    AdProductStockComponent,
    AdReceivingComponent,
    AdSalesComponent,
    AdStocinComponent,
    AdSalesReportComponent,
    AdStaffComponent,
    NotFoundComponent,
    AdProductlistComponent,
    RegisterComponent,
    AdStockinInvoiceComponent,
    AdWarehouseComponent,
    AdDistributorComponent,
    AdCategoryComponent,
    AdSubcategoryComponent,
    AdBrandComponent,
    AdLoginreglistComponent,
    ProductlistBrandComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
