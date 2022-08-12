import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './component/produtos/produtos.component';
import {HttpClientModule}  from'@angular/common/http';
import { RegistarComponent } from './pages/registar/registar.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ProdutosComponent,
    RegistarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
