import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import  {LoggerService} from '../logger.service';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css']
})
export class ContactAppComponent implements OnInit {
  email = '';
  vetEmail: string [] = [];
  username ='';
  emailsAdded = false;
  name= "Caique Camargo"

  constructor(private contactList : LoggerService) { //injeção de dependencia
  }

  ngOnInit(): void {  //chamando método getContactList ao iniciar
   this.vetEmail = this.contactList.getContactList();
  }

  ngOnDestroy(): void {   //chamando método setContactList ao finalizar
   this.contactList.setContactList(this.email); 
  }

  onUpdateEmail(event: any){ //Aparecer o que está sendo digitado
      this.email= (<HTMLInputElement>event.target).value;
  }

  onAdd(){  //botão Add email
    if(this.email == '')
    {
      alert('Please, type an email.')
    }
    else{
    this.emailsAdded= true;
    this.vetEmail.push(this.email);
    alert('The Email ('+ this.email +') has been added!')
  }
}

  /*onReset(){   //função resetar todos os emails
    if(this.email===''){

    }
    else{
    this.vetEmail = [];
    this.emailsAdded= false;
    alert("Emails have been removed.")
     
  }
  }
  */
  onReset(){      //remove 1 email por vez.
    if(this.email === '')
    {
      this.contactList.onDelete();
    }
    else if (this.email !== ''){
    this.vetEmail.shift();
    this.emailsAdded= false;
    alert('The email has been removed')
    }
  }
}
