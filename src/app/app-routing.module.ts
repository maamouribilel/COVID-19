import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { MedicalAidComponent } from './components/medical-aid/medical-aid.component';


const routes: Routes = [



  {path: '', component: HomeComponent},
  {path: 'symptoms', component: SymptomsComponent},
  {path: 'medical-aid', component: MedicalAidComponent},  
/*
  {path: 'home', component: HomeComponent},
  {path: 'symptoms', component: SymptomsComponent},
  {path: 'medical-aid', component: MedicalAidComponent},
  */
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
