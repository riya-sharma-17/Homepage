import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
