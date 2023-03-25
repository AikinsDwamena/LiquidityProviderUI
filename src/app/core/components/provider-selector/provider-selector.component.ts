import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Provider } from '../../models/provider.model';

@Component({
  selector: 'app-provider-selector',
  templateUrl: './provider-selector.component.html',
  styleUrls: [
    './provider-selector.component.scss'
   
  ],
})
export class ProviderSelectorComponent {
  @Output() stockChanged = new EventEmitter<string>();
 @Input() provider_data!:Provider[];

  @Input() selectedProvider: string = 'FXCM';

  onCheck(e: Event): void {
    this.selectedProvider = (e.target as HTMLInputElement).value;
    this.stockChanged.emit(this.selectedProvider);
  }
}
