import { Component } from '@angular/core';
import { Agency } from './models/employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-simple-crud';
  agencyArray: Agency[] = [
    {
      "id": 1,
      "agencia": "Las Flores",
      "distrito": "San Juan De Lurigancho",
      "provincia": "Lima",
      "departamento": "Lima",
      "direccion": "Las Flores de Primavera 1487",
      "lat": "-77.01232817",
      "lon": "-12.0046896"
    },
    {
      "id": 2,
      "agencia": "Punchana",
      "distrito": "Punchana",
      "provincia": "Maynas",
      "departamento": "Loreto",
      "direccion": "Av. La Marina N° 944",
      "lat": "-73.240647",
      "lon": "-3.731367"
    },
    {
      "id": 3,
      "agencia": "Conquistadores",
      "distrito": "San Isidro",
      "provincia": "Lima",
      "departamento": "Lima",
      "direccion": "Av. Conquistadores 968",
      "lat": "-77.03735314",
      "lon": "-12.10568371"
    },
  ];
  selectedAgency: Agency = new Agency();
  openForEdit(agencia:Agency){
    this.selectedAgency = agencia;

  };
  addOrEdit(){
    if( this.selectedAgency.id ===10){
      this.selectedAgency.id = this.agencyArray.length +1;
    this.agencyArray.push(this.selectedAgency);
    }
    
    this.selectedAgency = new Agency();
  }
  delete(){
    if( confirm('Are you sure you want to delete it?') ){
      this.agencyArray = this.agencyArray.filter(x => x != this.selectedAgency)
      this.selectedAgency = new Agency();

    }
  }
}
