import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product:any;
  @Output() public addToCart: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }


  public addProduct() {
this.addToCart.emit(this.product);
  }
}
