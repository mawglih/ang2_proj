import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AboutComponent }from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'questionnaire', component: QuestionnaireComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];