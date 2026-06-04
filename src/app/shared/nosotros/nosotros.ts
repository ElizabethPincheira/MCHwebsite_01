import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  benefits = [
    {
      icon: '🌿',
      title: 'INGREDIENTES NATURALES',
      description: 'Seleccionamos ingredientes de calidad, sin preservantes ni colorantes artificiales.'
    },
    {
      icon: '🍑',
      title: 'RECETA TRADICIONAL',
      description: 'Mantenemos el sabor clásico del mote con huesillos preparado como en casa.'
    },
    {
      icon: '❤️',
      title: 'HECHO CON AMOR',
      description: 'Cada preparación se realiza cuidadosamente para entregar la mejor experiencia.'
    }
  ];


}
