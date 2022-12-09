import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CardListTemplateComponent } from './components/shared/card-list-template/card-list-template.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { InterceptorProviders } from './interceptors/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardListTemplateComponent,
    SearchBarComponent,
    UserListComponent,
    UserDetailsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    InterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
