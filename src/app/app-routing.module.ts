import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillsComponent } from './modules/skills/components/skills.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { SkillDetailComponent } from './components/skill-detail/skill-detail.component';
import { DisplayMoviesComponent } from './modules/movies/display-movies/display-movies.component';
import { DisplayMusicComponent } from './modules/music/display-music/display-music.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: 'phone',
    component: PhoneFormComponent
  },
  {
    path: 'skills/:id',
    component: SkillDetailComponent
  },
  {
    path: 'movies',
    component: DisplayMoviesComponent
  },
  {
    path: 'music',
    component: DisplayMusicComponent
  },
  {
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
