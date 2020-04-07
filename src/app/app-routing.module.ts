import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ReservationComponent } from './reservation/reservation.component';



const routes: Routes = [
  { path:'users', component: UserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'calendar', component: ReservationComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
