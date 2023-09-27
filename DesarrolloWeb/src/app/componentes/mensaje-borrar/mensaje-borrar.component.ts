import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

import { Inject } from '@angular/core';
import {NgIf}  from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-mensaje-borrar',
  templateUrl: './mensaje-borrar.component.html',
  styleUrls: ['./mensaje-borrar.component.scss']
})
export class MensajeBorrarComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  animal: any;
name: any;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})
export class DialogOverviewExampleDialog {
animal: any;
name: any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
