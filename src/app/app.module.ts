import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetCryptosService } from './get-cryptos.service';
import { CryptotableComponent } from './components/cryptotable/cryptotable.component'


@NgModule({
  declarations: [
    AppComponent,
    CryptotableComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [GetCryptosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
