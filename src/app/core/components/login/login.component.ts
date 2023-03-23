import { Component } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { GoogleApiServiceService } from '../../services/google-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public oidcSecurityService: OidcSecurityService, private loginService:GoogleApiServiceService,private router:Router) {}

  ngOnInit() {
    console.log("Login component")
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      if(isAuthenticated){
        this.loginService.login().then((data) => {
          data.subscribe({
            next:(value) => {
              console.log("i was called")
              this.router.navigateByUrl('/home')
            },

            error: (err) => {
             console.log("errro occured")
              console.error(err);
              
            }

          })
        })
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
}
