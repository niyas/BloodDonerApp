import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RegisterComponent } from './components/register.component';

@NgModule({
  declarations: [
      AppComponent,
      RegisterComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      MyDatePickerModule,
      RouterModule.forRoot(routes),
      NgbModule.forRoot(),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
