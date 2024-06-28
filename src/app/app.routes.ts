import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {PatientsCardsComponent} from "./searchAndMatch/pages/patients-cards/patients-cards.component";
import {PsychologistCardsComponent} from "./searchAndMatch/pages/psychologist-cards/psychologist-cards.component";
import {PatientAccount} from "./accountManagement/pages/patient-account/patient-account";
import {ReunionesCardsComponent} from "./therapyManagement/components/reuniones-cards/reuniones-cards.component";
import {ReunionespsicologosCardsComponent} from "./therapyManagement/components/reunionespsicologos-cards/reunionespsicologos-cards.component";
import {PatientCardComponent} from "./TherapyDesign/patientCard/components/patient-card/patient-card.component";
import {PatientCardPatientComponent} from "./TherapyDesign/patientCardPatient/components/patient-card/patient-card-patient.component";
import {PsychologistAccount} from "./accountManagementPsychologist/pages/psychologist-account/psychologist-account.component";
import {
  AppointmentsCardsComponent
} from "./appointmentManagement/pages/appointments-cards/appointments-cards.component";
import {
  PsychologistsScheduleCardsComponent
} from "./appointmentManagement/pages/psychologists-schedule-cards/psychologists-schedule-cards.component";
import {
  PsychologistsScheduleComponent
} from "./appointmentManagement/components/psychologists-schedule/psychologists-schedule.component";
import {
  PyschologistFinancialComponent
} from "./FinancialManagement/components/pyschologist-financial/pyschologist-financial.component";

export const routes: Routes = [
  //parte de psychologists
  { path: 'psychologist/patients', component: PatientsCardsComponent},
  { path: 'psychologist/appointments', component: AppointmentsCardsComponent},
  { path: 'psychologist/schedule/:id', component:  PsychologistsScheduleComponent},
  { path: 'psychologist/notes', component:  PatientCardPatientComponent},
  { path: 'financial', component: PyschologistFinancialComponent }, // Define the financial route
  { path: 'psychologist/meetings', component: ReunionespsicologosCardsComponent},
  { path: 'psychologist/settings', component: PsychologistAccount},


  //parte de patients
  { path: 'patient/psychologists', component:  PsychologistCardsComponent},
  //horarios de psicologo
  //cambiar
  { path: 'patient/calendar', component:  PsychologistsScheduleCardsComponent},
  { path: 'patient/meetings', component:  ReunionesCardsComponent},
  { path: 'patient/notes', component:  PatientCardComponent},
  { path: 'patient/settings', component:  PatientAccount},
  { path: '', redirectTo: 'psychologist/patients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
