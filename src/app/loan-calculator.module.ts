import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LoanCalculatorComponent } from './loan-calculator.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    LoanCalculatorComponent,
    SliderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoanCalculatorComponent]
})
export class AppModule { }
