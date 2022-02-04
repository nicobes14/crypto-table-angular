import { Component } from '@angular/core';
import { GetCryptosService } from './get-cryptos.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Cryptos';
  cryptosIds: any = [];

  constructor(
    private getCryptoService: GetCryptosService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Crypto List');
    this.getCryptos();
    setInterval(() => {
      this.getCryptos();
    }, 60 * 1000);
    document.body.style.backgroundColor = '#212121';
  }

  cryptos: any = [];
  filteredCryptos: any = [];

  async getCryptos() {
    this.cryptos = await this.getCryptoService.getCryptos();
    console.log(this.cryptos);

    this.filteredCryptos = this.cryptos;
  }

  searchInput: string = '';

  searchCrypto() {
    this.filteredCryptos = this.cryptos.filter(
      (crypto: any) =>
        crypto.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(this.searchInput.toLowerCase())
    );
    console.log(this.searchInput);
  }
}
