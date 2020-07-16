import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private logService: LoggerService) { }

  ngOnInit(): void {
    this.logService.logInicializate("Home page");
  }

  ngOnDestroy(): void{
    console.error("Finalizado");
  }

}
