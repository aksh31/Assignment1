import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path : '', redirectTo : 'users', pathMatch:'full'},
  {path : 'users', component : UsersComponent},
  {path : 'usersToDo', component : ToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
