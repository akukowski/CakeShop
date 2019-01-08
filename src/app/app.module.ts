import { CakeDelete } from './page/cake-delete/cake-delete.component';
import { MaterialModule } from './shareModule/material.module';
import { CakeService } from './service/cake.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//Http
import { HttpClientModule } from '@angular/common/http';

//Routing
import { AppRoutesModule } from './app-routes.module';

//Komponenty
import { AppComponent } from './app.component';
import { CakeListComponent } from './page/cake-list/cake-list.component';
import { CakeAddEditComponent } from './page/cake-add-edit/cake-add-edit.component';
import { MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  panelClass: 'cake-dialog',
  minWidth: "630px",
  hasBackdrop: true
}

@NgModule({
  declarations: [
    AppComponent,
    CakeListComponent,
    CakeAddEditComponent,
    CakeDelete
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutesModule
  ],
  entryComponents: [
    CakeAddEditComponent,
    CakeDelete
  ],
  providers: [
    CakeService,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
