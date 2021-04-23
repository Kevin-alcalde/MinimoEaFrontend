import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colectivo } from '../models/colectivo';


@Injectable({
  providedIn: 'root'
})
export class ColectivoService {


  URL_API = 'http://localhost:3000/colectivos'

selectedColectivo: Colectivo = {
  nombre:'',
  descripcion:'',
  vacuna:''
};

colectivos: Colectivo[];





  constructor(public http: HttpClient) {}


getColectivos(){
  return this.http.get<Colectivo[]>(this.URL_API+'/all');

}

createColectivo(colectivo: Colectivo) {
  return this.http.post(this.URL_API+'/create', colectivo);
}

deleteColectivo(_id: string) {

  return this.http.delete(this.URL_API+'/delete'+`/${_id}`);
 
}






}
