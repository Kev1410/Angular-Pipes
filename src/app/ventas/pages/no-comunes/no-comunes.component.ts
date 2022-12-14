import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Mari', 'Sofia', 'Kevin', 'Marco', 'Eric'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarPersona() {
    this.nombre = 'Kevin';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue pipe
  persona = {
    nombre: 'Kevin',
    edad: 35,
    direccion: 'Guadalajara, Mexico',
  };

  //JsonPipe
  heroes = 
  [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500);

  });
}
