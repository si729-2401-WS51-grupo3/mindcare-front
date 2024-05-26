import { Routes } from '@angular/router';
import {CitasCardsComponent} from "./therapyManagement/components/citas-cards/citas-cards.component";
import {ReunionesCardsComponent} from "./therapyManagement/components/reuniones-cards/reuniones-cards.component";
import {
  ReunionespsicologosCardsComponent
} from "./therapyManagement/components/reunionespsicologos-cards/reunionespsicologos-cards.component";
import {
  PsychologistAccount
} from "./accountManagement/pages/psychologist-account/psychologist-account";

export const routes: Routes = [
  //parte de psychologists
  { path: 'psychologist/patients', component: PsychologistAccount},
  { path: 'psychologist/calendar', component: PsychologistAccount},
  { path: 'psychologist/meetings', component: ReunionespsicologosCardsComponent},//!
  { path: 'psychologist/settings', component: PsychologistAccount},
  //parte de patints
  { path: 'patient/psychologists', component:  PsychologistAccount},
  { path: 'patient/calendar', component:  CitasCardsComponent},
  { path: 'patient/meetings', component:  ReunionesCardsComponent},//!
  { path: 'patient/notes', component:  PsychologistAccount},
  { path: 'patient/settings', component:  PsychologistAccount},
  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PsychologistAccount }
];
