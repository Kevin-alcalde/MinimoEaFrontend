import { Component, OnInit } from '@angular/core';
import {CasoService} from '../../services/caso.service';
import{FormsModule, NgForm} from '@angular/forms'
import {Caso} from '../../models/caso'
@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent implements OnInit {

constructor(public casoService: CasoService){}



  ngOnInit(): void {

  this.getCasos(); 
    
  }


  getCasos() {

    this.casoService.getCasos().subscribe(
      res => {
        this.casoService.casos = res;
      },
      err => console.error(err)
    )

  }



  addCaso(form?: NgForm){
   
    if(form.value._id){
      this.casoService.putCasos(form.value).subscribe(
        (res) => {
          this.cleanForm(form);
          this.getCasos();
          });
    }
    else {
      this.casoService.createCaso(form.value).subscribe(
        res => {console.log(res)
          this.getCasos();
          this.cleanForm(form);
         },
        err=>console.error(err)
      )
    }
  
}

editCaso(caso:Caso){
  this.casoService.selectedCaso = caso;
}

cleanForm(form? : NgForm){
if(form){
  form.reset();
  this.casoService.selectedCaso=new Caso();
}
}

  }
