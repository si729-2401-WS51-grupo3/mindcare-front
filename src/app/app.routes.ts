import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PatientsCardsComponent} from "./searchAndMatch/pages/patients-cards/patients-cards.component";
import {PsychologistCardsComponent} from "./searchAndMatch/pages/psychologist-cards/psychologist-cards.component";
import {PatientAccount} from "./accountManagement/pages/patient-account/patient-account";

export const routes: Routes = [
  //parte de patients
  { path: 'psychologist/patients', component: PatientsCardsComponent},
  { path: 'psychologist/calendar', component: PatientsCardsComponent},
  { path: 'psychologist/meetings', component: PatientsCardsComponent},
  { path: 'psychologist/settings', component: PatientsCardsComponent},
  //parte de psychologists
  { path: 'patient/psychologists', component:  PsychologistCardsComponent},
  { path: 'patient/calendar', component:  PsychologistCardsComponent},
  { path: 'patient/meetings', component:  PsychologistCardsComponent},
  { path: 'patient/notes', component:  PsychologistCardsComponent},
  { path: 'patient/settings', component:  PatientAccount},
  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
