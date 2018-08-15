import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsModule } from './modules/skills/skills.module';
import { ContactsModule } from './modules/contacts/contacts.module';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { SkillDetailComponent } from './components/skill-detail/skill-detail.component';
import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';



@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent,
    PhoneFormComponent,
    SkillDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SkillsModule,
    ContactsModule,
    AppRoutingModule,
    MoviesModule,
    MusicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
