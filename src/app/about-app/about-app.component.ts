import { Component, OnInit, NgModule } from '@angular/core';
import { InfoService } from '../info.service'

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {

  course = "Padawan";
  courses: string [] = [];

  //cursos: string [] =["Lógica de Programação", "Linguagem C", " Linguagem C#", "Unit Test", "HTML", "CSS","Javascript", "Angular"];
  
  constructor(private coursesService : InfoService ) { } //chamando o serviço

  ngOnInit(): void {
      console.error("Componente About App Inicilizado")
      this.courses = this.coursesService.getCourses();
  }

}
