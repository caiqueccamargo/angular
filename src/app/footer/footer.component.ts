import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public date = new Date();

  @Input() course: string = "Padawan";

  constructor() { }

  ngOnInit(): void {
  }

}
