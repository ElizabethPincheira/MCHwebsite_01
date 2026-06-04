import { Component } from '@angular/core';
import { WhatsappService } from '../../core/service/whatsapp.service';
@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  constructor(
      private whatsappService: WhatsappService
    ) {}
  
    orderNow() {
  
      this.whatsappService.send(
        'Hola, quiero realizar un pedido de Mote con Huesillos.'
      );
    }

}
