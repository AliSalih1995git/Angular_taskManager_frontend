import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActiveguardGuard } from '../guard/activeguard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ActiveguardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
