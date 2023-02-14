import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  showPainel = false;
  textPainel = "Fechar Painel"

  ngOnInit(): void {
  }

  setText() {
    this.textPainel = !this.showPainel ? "Abrir Painel" : "Fechar Painel"
    this.showPainel = !this.showPainel
  }
}
