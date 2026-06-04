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

}
