import { HeaderService } from '../../../shared/services/header.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() empresa = ''

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
  }
  
  get icon(): string {
    return this.headerService.headerData.icon
  }
  
  get routerUrl(): string {
    return this.headerService.headerData.routerUrl
  }
}
