import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Products } from '../../shared/products/products';
import { Pedir } from '../../shared/pedir/pedir';
import { Nosotros } from '../../shared/nosotros/nosotros';
import { Contacto } from '../../shared/contacto/contacto';
import { Footer } from '../../shared/footer/footer';
import { Hero } from '../../shared/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Navbar, Products, Pedir, Nosotros,Contacto, Footer, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

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

{
id:3,
name:'Pack Familiar',
description:'Ideal para familia, reuniones y compartir.',
price:'6.500',
image:'assets/mote-pack.png'
}

];


}
