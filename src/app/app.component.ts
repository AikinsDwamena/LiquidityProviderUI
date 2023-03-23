import { Component } from '@angular/core';
import { GoogleApiServiceService } from './core/services/google-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liquidity-provider';

  constructor(private readonly google: GoogleApiServiceService){
    
  }
}
