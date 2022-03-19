import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosComponent } from './juros/juros.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JuroscompostosComponent } from './juroscompostos/juroscompostos.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'juros', component: JurosComponent },
      { path: 'juroscompostos', component: JuroscompostosComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    JurosComponent,
    JuroscompostosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
