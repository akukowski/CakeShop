import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//Modele
import { CakeModel } from './../../models/CakeModel';
import { MessageModel } from './../../models/MessageModel';
//Komponenty
import { CakeAddEditComponent } from '../cake-add-edit/cake-add-edit.component';
import { CakeDelete } from '../cake-delete/cake-delete.component';
//Serwisy
import { CakeService } from './../../service/cake.service';

@Component({
  selector: 'cs-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.less']
})
export class CakeListComponent implements OnInit {

  //Lista ciast
  public cakes: CakeModel[];

  //Kontener na wiadmości
  public message: MessageModel[];

  constructor(
    private _cakeService: CakeService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.getCakes();

  }

  //Pieranie listy tortów
  private getCakes(): void {
    this._cakeService.getCakes().subscribe(
      data => this.cakes = data,
      err => this.showMessage()
    )
  }

  //Usuwanie tortu
  public deleteCake(cake: CakeModel): void {

    let dialog = this._dialog.open(CakeDelete, {data: cake});

    dialog.afterClosed().subscribe(
      data => {
        if(data) {
         
          this._cakeService.deleteCake(cake.id).subscribe(
            
            data => {
              let index = this.cakes.indexOf(cake);
              this.cakes.splice(index, 1);
              this.showMessage('success', 'Ciasto usunięto poprawnie')
            },
            err => this.showMessage()
          )
        }
      }
    )

  }

  //Edycja dodanie tortu
  public addEditCake(cake: CakeModel = null): void {

    let dialog = this._dialog.open(CakeAddEditComponent, {data: cake});

    dialog.afterClosed().subscribe(
      data => {

        if(data) {
          
          let action = (cake ? this._cakeService.updateCake(cake.id, data) : this._cakeService.addCake(data));
          
          action.subscribe(
            data => this.addToArray(data),
            err => this.showMessage()
          )

        }

      }
    )
  }
  //Dodanie do tablicy ciast
  private addToArray(data: CakeModel): void {

    let isArray = false
    for(let cakeId in this.cakes) {

      if(this.cakes[cakeId].id == data.id) {

        isArray = true;
        this.cakes[cakeId] = data;
        this.showMessage('success', 'Ciasto prawidłowo z edytowane');
      }

    }

    if(!isArray) {

      this.cakes.push(data);
      this.showMessage('success', 'Ciasto zostało dodane');
    }

  }
  //Dodanie wiadomości do tablicy
  private showMessage(classMessage: string = 'error', contentMessage: string = "Wystąpił błąd spróbuj ponownie później"): void {

    this.message = [{
      class: classMessage,
      message: contentMessage
    }];

  }
  //Usunięcie wiadomości
  public deleteMessage(deleteMessage: MessageModel): void {

    let index = this.message.indexOf(deleteMessage);
    this.message.splice(index, 1);

  }

}
