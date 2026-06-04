import { Component } from '@angular/core';
import { WhatsappService } from '../../core/service/whatsapp.service';


@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  constructor(
    private whatsappService: WhatsappService
  ) {}

  orderNow() {

    this.whatsappService.send(
      'Hola, quiero realizar un pedido de Mote con Huesillos.'
    );
  }

}
