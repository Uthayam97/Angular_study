import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WithoutTestcaseComponent } from './without-testcase/without-testcase.component';
import { WithTestcaseComponent } from './with-testcase/with-testcase.component';

@NgModule({
  declarations: [
    AppComponent,
    WithoutTestcaseComponent,
    WithTestcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
