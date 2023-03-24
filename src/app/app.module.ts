import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/interceptors/token.interceptor';
import { ProviderSelectorComponent } from './core/components/provider-selector/provider-selector.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { OrderComponent } from './core/components/make-order/order.component';
import { MakeOrderComponent } from './core/components/make-order/make-order.component';
import { ProviderDetailsComponent } from './core/components/provider-details/provider-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProviderSelectorComponent,
    SidebarComponent,
    OrderComponent,
    MakeOrderComponent,
    ProviderDetailsComponent
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://accounts.google.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '629595243152-ukif88js0rr84map0lq9p1a5925gk6n8.apps.googleusercontent.com',
        scope: 'openid profile email ',
        responseType: 'id_token token',
        triggerAuthorizationResultEvent: true,
        postLoginRoute: '/fx',
        startCheckSession: false,
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      }}),
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS , useClass: TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
