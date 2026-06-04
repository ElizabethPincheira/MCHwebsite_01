import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  private readonly phone = '56951076774';

  send(message: string): void {

    const url =
      `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

}