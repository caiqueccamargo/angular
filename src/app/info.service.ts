import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService { //serviço p/ passar vetor
  
  private emails: string;

  constructor() { }

  getCourses(){
    return ['Logic Programming ', 'C', 'C#','HTML','CSS','Javascript', 'Angular'];
  }
}
