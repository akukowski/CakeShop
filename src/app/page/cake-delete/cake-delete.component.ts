import { CakeModel } from './../../models/CakeModel';
import { Component, OnInit, Inject, OnChanges, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cs-cake-delete',
  templateUrl: './cake-delete.component.html',
  styleUrls: ['./cake-delete.component.less']
})
export class CakeDelete implements OnInit {

  //Model ciasta
  public cake: CakeModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit(): void {

    this.cake = this.data;

  }

}
