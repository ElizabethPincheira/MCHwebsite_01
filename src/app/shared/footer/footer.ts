import { Component } from '@angular/core';
import { WhatsappService } from '../../core/service/whatsapp.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(
        private whatsappService: WhatsappService
      ) {}
    
      orderNow() {
    
        this.whatsappService.send(
          'Hola, quiero realizar un pedido de Mote con Huesillos.'
        );
      }
}
