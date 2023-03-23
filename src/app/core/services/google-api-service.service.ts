import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { firstValueFrom } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation:false,
  redirectUri: window.location.origin,
  clientId:"629595243152-ukif88js0rr84map0lq9p1a5925gk6n8.apps.googleusercontent.com",
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiServiceService {

  constructor(private http:HttpClient, private oidcSecurityService: OidcSecurityService) { 

  }

  async login(){
    const token = await firstValueFrom(this.oidcSecurityService.getIdToken());

    sessionStorage.setItem('id_token', token)

    console.log(token);

    return this.http.get('http://localhost:8080/register',{responseType:'text'});
  }

  logout(){
    sessionStorage.removeItem('id_token');
    return this.oidcSecurityService.logoffLocal();
  }
}
