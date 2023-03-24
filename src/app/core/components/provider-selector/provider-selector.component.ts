import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-provider-selector',
  templateUrl: './provider-selector.component.html',
  styleUrls: [
    './provider-selector.component.scss'
   
  ],
})
export class ProviderSelectorComponent {
  @Output() stockChanged = new EventEmitter<string>();
  public provider_data = [
    {
      name: 'LMAX',
      path: 'assets/product-images/amazon.png',
    },
    {
      name: 'CURRENX',
      path: 'assets/product-images/microsoft.png',
    },
    {
      name: 'HOTSOTFX',
      path: 'assets/product-images/oracle.png',
    },
    {
      name: 'FXCM',
      path: 'assets/product-images/tesla.png',
    },
    {
      name: 'INTEGRALFX',
      path: 'assets/product-images/ibm.png',
    }
  ];

  @Input() selectedStock: string = 'LMAX';

  onCheck(e: Event): void {
    this.selectedStock = (e.target as HTMLInputElement).value;
    this.stockChanged.emit(this.selectedStock);
  }
}
