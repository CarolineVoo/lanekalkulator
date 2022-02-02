import { Component, OnInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked{
  title = 'lanekalkulator';
  rente: string;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {}
  
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  getRente(rente: string): void {
    this.rente = rente;
  }

  

}
