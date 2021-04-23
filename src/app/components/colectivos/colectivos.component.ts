import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Colectivo } from 'src/app/models/colectivo';
import { CasoService } from 'src/app/services/caso.service';
import  { ColectivoService } from '../../services/colectivo.service'
@Component({
  selector: 'app-colectivos',
  templateUrl: './colectivos.component.html',
  styleUrls: ['./colectivos.component.css']
})
export class ColectivosComponent implements OnInit {

  constructor(public colectivoService: ColectivoService) { }

  ngOnInit(): void {

   this.getColectivos();


  }

 getColectivos(){
   this.colectivoService.getColectivos().subscribe(
     
     res => {
       this.colectivoService.colectivos = res;
     },

     err => console.log(err)


   )
 }

addColectivo(form?: NgForm){

    this.colectivoService.createColectivo(form.value).subscribe(
      res => {console.log(res)
        this.getColectivos();
        this.cleanForm(form);
       },
      err=>console.error(err)
    )
  
  
}

cleanForm(form? : NgForm){
  if(form){
    form.reset();
    this.colectivoService.selectedColectivo=new Colectivo();
  }
  }

  deleteColectivo(_id: string, form :NgForm){
   this.colectivoService.deleteColectivo(_id).subscribe((res)=>{
     this.getColectivos();
     this.cleanForm(form);
   })
  }

  
}
