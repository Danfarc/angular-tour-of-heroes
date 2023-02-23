import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //Decaracion de Variables
  messages: string[] = [];

  //Metodos
  //Agrego un mensaje a arreglo
  add(message: string) {
    this.messages.push(message);
  }
  // Limpio el arreglo de mensajes
  clear() {
    this.messages = [];
  }

  constructor() { }
}
