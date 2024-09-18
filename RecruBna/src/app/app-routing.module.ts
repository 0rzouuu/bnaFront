import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteComponent } from './poste/poste.component';
import { PostulerComponent } from './postuler/postuler.component';
import { HomeComponent } from './home/home.component';
import { FinalComponent } from './final/final.component';


const routes :Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'postuler', component: PostulerComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'final', component: FinalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
