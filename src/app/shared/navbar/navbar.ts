import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../core/service/whatsapp.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(
      private whatsappService: WhatsappService
    ) {}
  
    orderNow() {
  
      this.whatsappService.send(
        'Hola, quiero realizar un pedido de Mote con Huesillos.'
      );
    }

}
