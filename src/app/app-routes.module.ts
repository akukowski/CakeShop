import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//Komponenty
import { CakeListComponent } from './page/cake-list/cake-list.component';


//Główny routing
const appRoutes: Routes = [
  //Wczytanie listy ciast
  { path: '', component: CakeListComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutesModule { }
