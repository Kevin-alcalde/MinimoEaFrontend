import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Caso } from '../models/caso';

@Injectable({
  providedIn: 'root'
})
export class CasoService {


 URL_API = 'http://localhost:3000/caso'

selectedCaso: Caso = {
  nombre: '',
  apellidos: '',
  genero:'',
  clasificacion:'',
  identificador: ''
};

 casos: Caso[];

  constructor(public http: HttpClient) {}

getCasos() {
 return this.http.get<Caso[]>(this.URL_API + '/all');
  
}

createCaso(caso: Caso) {
  return this.http.post(this.URL_API+'/create', caso);
}

putCasos(caso:Caso) {
  return this.http.put(this.URL_API+'/update'+`/${caso._id}`, caso );

}



}
