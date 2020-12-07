import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SistemasService {

  url = 'https://www.smartnetmexico.mx';

  constructor(private httpClient : HttpClient) { }

  getDatos(){
    return this.httpClient.get<any[]>(this.url+'/usuarios/userall');
  }
}
