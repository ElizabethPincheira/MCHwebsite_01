import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [

{
id:1,
name:'Mote 1/2 litro',
description:'Porción ideal para disfrutar en cualquier momento.',
price:'2.000',
image:'assets/mote-medio.png'
},

{
id:2,
name:'Mote 1 litro',
description:'La medida perfecta para compartir o darte un gusto.',
price:'3.500',
image:'assets/mote-litro.png'
},

/*
{
id:3,
name:'Pack Familiar',
description:'Ideal para familia, reuniones y compartir.',
price:'6.500',
image:'assets/mote-pack.png'
}
*/
];

}
