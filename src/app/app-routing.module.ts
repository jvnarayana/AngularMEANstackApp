import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFound404ErrorComponent } from './components/not-found404-error/not-found404-error.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeDeleteComponent } from './components/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'employee-list'},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-delete', component: EmployeeDeleteComponent},
  {path: 'employee-edit', component: EmployeeEditComponent},
  {path: '**', component: NotFound404ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
