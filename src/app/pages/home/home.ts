import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Products } from '../../shared/products/products';
import { Pedir } from '../../shared/pedir/pedir';
import { Nosotros } from '../../shared/nosotros/nosotros';
import { Contacto } from '../../shared/contacto/contacto';
import { Footer } from '../../shared/footer/footer';
import { Hero } from '../../shared/hero/hero';
import { Entregas } from '../../shared/entregas/entregas';

@Component({
  selector: 'app-home',
  imports: [Navbar, Products, Pedir, Nosotros,Contacto, Footer, Hero, Entregas],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

    showComingSoon = true;

}
