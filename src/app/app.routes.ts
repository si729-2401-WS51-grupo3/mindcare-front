import { Routes } from '@angular/router';
import {PsicologistAppointmentViewComponent} from './appointmentManagement/pages/psicologist-appointment-view/psicologist-appointment-view.component';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PatientAppointmentViewComponent} from "./appointmentManagement/pages/patient-appointment-view/patient-appointment-view.component";
import {PatientsCardsComponent} from "./searchAndMatch/pages/patients-cards/patients-cards.component";
import {PsychologistCardsComponent} from "./searchAndMatch/pages/psychologist-cards/psychologist-cards.component";
import {PatientAccount} from "./accountManagement/pages/patient-account/patient-account";
import {PatientCardComponent} from "./TherapyDesign/patientCard/components/patient-card/patient-card.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";

export const routes: Routes = [
  //parte de psychologists
  { path: 'psychologist/patients', component: PatientsCardsComponent},
  { path: 'psychologist/calendar', component: PsicologistAppointmentViewComponent},
  { path: 'psychologist/meetings', component: PsicologistAppointmentViewComponent},
  { path: 'psychologist/settings', component: PsicologistAppointmentViewComponent},
  //parte de patints
  { path: 'patient/psychologists', component:  PsychologistCardsComponent},
  { path: 'patient/calendar', component:  PatientAppointmentViewComponent},
  { path: 'patient/meetings', component:  PatientAppointmentViewComponent},
  { path: 'patient/notes', component:  PatientCardComponent},
  { path: 'patient/settings', component:  PatientAccount},

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent},

  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
