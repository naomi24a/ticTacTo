import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './modules/board/board.component';
import { ButtonComponent } from './shared/button/button.component';

const routes: Routes = [
  { path: "board", component: BoardComponent },
  { path: "botton", component: ButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
