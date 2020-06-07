import { AfterContentInit, Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit, OnInit {
  public Products = {
    _id: 'hfn57cv585',
    name: 'Oranges',
    description: 'Oranges are stuffed with liquid sunshine!',
    feedbacksCount: 2,
    images: [{
      url: 'https://producemadesimple.ca/wp-content/uploads/2015/01/orange-web-600x450.jpg',
      sourse: 'jf7hm8vu',
    }],
    price: [{
      price: 2,
      currency: '$',
      amount: 1,
      metrics: 'kg',
    }],
    rating: 5,
    status: true,
  };
  public chosenProduct!: any;
  public product: any;
 // @ContentChild('terminalinfo', { static: true }) public terminalinfo!: ElementRef;

  constructor() {
  }

  public addProduct($event: any) {
    this.product = $event;       // $event :any
    this.chosenProduct = 'name: ' + this.product.name + '\n' + 'price: ' + this.product.price[0].price +
      this.product.price[0].currency + '/' + this.product.price[0].metrics + '\n' + 'rating: ' + this.product.rating;

  }

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
   // console.log('terminalinfo', this.terminalinfo);
  }


}
