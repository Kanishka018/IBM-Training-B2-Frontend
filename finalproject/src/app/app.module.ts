import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';


import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';
import { CheckeligibilityComponent } from './checkeligibility/checkeligibility.component';
import { LoginComponent } from './login/login.component';
import { EmicalcComponent } from './emicalc/emicalc.component';
import { FeaturesComponent } from './features/features.component';
import { SalbasedtableComponent } from './salbasedtable/salbasedtable.component';
import { CibilbasedtableComponent } from './cibilbasedtable/cibilbasedtable.component';
import { ArticlesComponent } from './articles/articles.component';
import { DocsandchargeComponent } from './docsandcharge/docsandcharge.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EmibackgComponent } from './emibackg/emibackg.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    
    FooterComponent,
    FAQComponent,
    CheckeligibilityComponent,
    LoginComponent,
    EmicalcComponent,
    FeaturesComponent,
    SalbasedtableComponent,
    CibilbasedtableComponent,
    ArticlesComponent,
    DocsandchargeComponent,
    CarouselComponent,
    EmibackgComponent,
    HomepageComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
