import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { InterceptorProviders } from './interceptors/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    InterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
