import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Products } from './shared/products/products';
import { Pedir } from './shared/pedir/pedir';
import { Nosotros } from './shared/nosotros/nosotros';
import { Footer } from './shared/footer/footer';
import { Contacto } from './shared/contacto/contacto';
import { Hero } from './shared/hero/hero';



@Component({
  selector: 'app-root',
  imports: [Navbar, Products, Pedir, Nosotros, Contacto, Footer, Hero],
  templateUrl: './pages/home/home.html',
})
export class App {}
