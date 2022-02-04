import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCryptosService {

  constructor() { }


  //this loads like 13000 cryptos and crash the app

  getAllCryptos = async () => {
    let data = await fetch("https://api.coingecko.com/api/v3/coins/list?include_platform=false")
    let cryptos = await data.json()
    //return cryptos;
  }

  getCryptos = async () => {
    let data = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false");
    let cryptos = await data.json();
    return cryptos;
  }

  getCrypto = async (id: string) => {
    let data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    let crypto = await data.json();
    console.log(crypto);
  }

}
