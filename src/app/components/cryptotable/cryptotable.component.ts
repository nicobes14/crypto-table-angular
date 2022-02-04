import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptotable',
  templateUrl: './cryptotable.component.html',
  styleUrls: ['./cryptotable.component.css']
})
export class CryptotableComponent implements OnInit {

  @Input() cryptoList: any = [];

  constructor() { }

  flechaString: string = ''

  ordernarPorPrecioDireccion: boolean = true;

  ordenarPorPrecio() {

    if (this.ordernarPorPrecioDireccion) {
      this.flechaString = '↓'
      this.cryptoList.sort((a: any, b: any) => (b.current_price > a.current_price) ? 1 : ((a.last_nom > b.last_nom) ? -1 : 0))
      this.ordernarPorPrecioDireccion = false;
    } else {
      this.flechaString = '↑'
      this.cryptoList.sort((a: any, b: any) => (a.current_price > b.current_price) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
      this.ordernarPorPrecioDireccion = true;
    }


  }

  ngOnInit(): void {
  }

}
