import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { HttpComponent } from './http/http.component';
import { BuyingEPComponent } from './article/charts/buying-ep.component';

import { HttpService } from './http/http.service';
import { CategoryComponent } from './article/charts/category.component';
import { TableComponent } from './article/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    HttpComponent,
    BuyingEPComponent,
    CategoryComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
