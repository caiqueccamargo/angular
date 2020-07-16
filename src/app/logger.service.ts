import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService { //serviço p/ log e métodos Get e Set

  private contactList: string [] = [];

  constructor() { }

  public logInicializate(name: string){
    console.error(name + " Inicializado");
  }

  getContactList(){
    return this.contactList;
  }

  setContactList(email: string){
    this.contactList.push(email);
  }

  onDelete(){
    this.contactList.shift();
  }
}
