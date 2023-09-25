import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-fecha',
  templateUrl: './detalle-fecha.component.html',
  styleUrls: ['./detalle-fecha.component.scss']
})
export class DetalleFechaComponent implements OnInit {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
