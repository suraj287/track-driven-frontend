import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { CallbackComponent } from '../component/callback.component';
import { TableComponent } from '../component/table/table.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
