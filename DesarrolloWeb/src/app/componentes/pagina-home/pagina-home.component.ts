import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.scss']
})
export class PaginaHomeComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
