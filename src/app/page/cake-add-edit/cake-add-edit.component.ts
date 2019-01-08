import { CakeService } from './../../service/cake.service';
import { CakeModel } from './../../models/CakeModel';
import { Component, OnInit, Inject, OnChanges, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cs-cake-add-edit',
  templateUrl: './cake-add-edit.component.html',
  styleUrls: ['./cake-add-edit.component.less']
})
export class CakeAddEditComponent implements OnInit {

  //Formularz dodawania i edycji ciasta
  public cakeForm: FormGroup;

  //Model ciasta
  public cake: CakeModel;

  //Zdjęcie ciasta
  public imageCake: any;

  //Możliwe warianty porcji
  public portions: number[];


  constructor(
    private _formBuild: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit(): void {

    this.portions = [4,8,12];

    this.cakeForm = this.buildCakeForm();
    
    if(this.data != null) {
      this.cake = this.data;
      this.imageCake = this.cake['image'];
      this.cakeForm.patchValue(this.cake);
      
    } else {

      this.cakeForm.get('newImage').setValidators(Validators.required);

    }

  }

  private buildCakeForm(): FormGroup {

      return this._formBuild.group({
        
        newImage: [''],
        name: ['', [Validators.required]],
        description: [''],
        portions: [4, [Validators.required]],
        price: ['', [Validators.required]],
        price_portions: ['']
      
      });
  }

  public changeImage(event): void {
    
    let imageSend = event.target.files[0];
    if(!imageSend) return;
    let reader = new FileReader();
    
    if(imageSend.type.match("image.*")) {
      reader.onload = (event) => {
        this.imageCake = event.target['result'];
      }
      reader.readAsDataURL(imageSend);
    }
  }

  public send(): CakeModel {
    let sendData = Object.assign(this.cakeForm.value, { image: this.imageCake });
    return sendData;
  }

}
