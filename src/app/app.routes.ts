import { Routes } from '@angular/router';
import {PsicologoCardsComponent} from "./accountManagement/components/psicologo-cards/psicologo-cards.component";
import {CitasCardsComponent} from "./therapyManagement/components/citas-cards/citas-cards.component";
import {ReunionesCardsComponent} from "./therapyManagement/components/reuniones-cards/reuniones-cards.component";
import {
  ReunionespsicologosCardsComponent
} from "./therapyManagement/components/reunionespsicologos-cards/reunionespsicologos-cards.component";

export const routes: Routes = [
  //parte de patients
  { path: 'psychologist/patients', component: PsicologoCardsComponent},
  { path: 'psychologist/calendar', component: PsicologoCardsComponent},
  { path: 'psychologist/meetings', component: ReunionespsicologosCardsComponent},
  { path: 'psychologist/settings', component: PsicologoCardsComponent},
  //parte de psychologists
  { path: 'patient/psychologists', component:  PsicologoCardsComponent},
  { path: 'patient/calendar', component:  CitasCardsComponent},
  { path: 'patient/meetings', component:  ReunionesCardsComponent},
  { path: 'patient/notes', component:  PsicologoCardsComponent},
  { path: 'patient/settings', component:  PsicologoCardsComponent},
  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PsicologoCardsComponent }
];
