import { Component } from '@angular/core';

@Component({
  selector: 'app-pedir',
  imports: [],
  templateUrl: './pedir.html',
  styleUrl: './pedir.css',
})
export class Pedir {


  steps = [
    {
      number: 1,
      icon: '🛒',
      title: 'ELIGE TUS PRODUCTOS',
      description: 'Selecciona los productos y cantidades que deseas.'
    },
    {
      number: 2,
      icon: '📝',
      title: 'COMPLETA TUS DATOS',
      description: 'Ingresa tu nombre, dirección y teléfono de contacto.'
    },
    {
      number: 3,
      icon: '📱',
      title: 'ENVÍA TU PEDIDO',
      description: 'Haz clic en el botón de WhatsApp para enviarnos tu pedido.'
    },
    {
      number: 4,
      icon: '🛵',
      title: 'RECIBE EN TU PUERTA',
      description: 'Te confirmamos el pedido y coordinamos la entrega.'
    }
  ];



}
