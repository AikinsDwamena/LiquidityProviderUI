import { Component, Input } from '@angular/core';
import { Provider } from '../../models/provider.model';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent {
  @Input() activeProvider!:string;
  providers:Provider[] = [
    {
      name: 'LMAX',
      path: "https://getlogovector.com/wp-content/uploads/2019/10/lmax-exchange-group-logo-vector.png",
      currencies:[
        new Currency("NAIRA",600,7.0 ),
        new Currency("CEDI",600,5.0 ),
        new Currency("CEFA",600,3.0 ),
        new Currency("DOLLAR",600,1.0 ),
        new Currency("EURO",600,0.8 ),
        new Currency("POUND",600,0.7 ),
      ]
    },
    {
      name: 'CURRENEX',
      path: 'https://www.tradeviewforex.com/assets/img/software/currenexSquare.png',
      currencies:[
        new Currency("NAIRA",680,7.0 ),
        new Currency("CEDI",300,5.0 ),
        new Currency("CEFA",100,3.0 ),
        new Currency("DOLLAR",6000,1.0 ),
        new Currency("EURO",60,0.8 ),
        new Currency("POUND",60,0.7 ),
      ]
    },
    {
      name: 'HOTSPOTFX',
      path: 'https://www.onestopbrokers.com/wp-content/uploads/2015/05/hotspot-fx-bats.jpg',
      currencies:[
        new Currency("NAIRA",600,17.0 ),
        new Currency("CEDI",600,10.0 ),
        new Currency("CEFA",600,8.0 ),
        new Currency("DOLLAR",600,0.9 ),
        new Currency("EURO",600,0.8 ),
        new Currency("POUND",600,0.6 ),
      ]
    },
    {
      name: 'FXCM',
      path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/FXCM_logo.svg/2560px-FXCM_logo.svg.png',
      currencies:[
        new Currency("NAIRA",600,17.0 ),
        new Currency("CEDI",600,15.0 ),
        new Currency("CEFA",600,13.0 ),
        new Currency("DOLLAR",600,1.0 ),
        new Currency("EURO",600,0.95 ),
        new Currency("POUND",600,0.7 ),
      ]
    },
    {
      name: 'INTEGRALFX',
      path: 'https://financialit.net/sites/default/files/integral2_4.png',
      currencies:[
        new Currency("NAIRA",60,17.0 ),
        new Currency("CEDI",200,9.9 ),
        new Currency("CEFA",630,10.0 ),
        new Currency("DOLLAR",1600,1.1 ),
        new Currency("EURO",63,0.9 ),
        new Currency("POUND",450,0.75 ),
      ]
    }
  ]


  returnCurrencies():Currency[] {
    return this.providers.filter(x => x.name === this.activeProvider)[0].currencies;
  }


}
