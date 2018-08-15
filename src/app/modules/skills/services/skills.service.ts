import { Injectable } from '@angular/core';

import { Skill } from '../../../shared/models/skill';
import { Level } from '../../../shared/types/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skill[] = [
    {
      id: 0,
      name: 'Angular',
      level: Level.Intermediate
     },
     {
       id: 1,
       name: 'Javascript',
       level: Level.Advanced
     },
     {
       id: 2,
       name: 'Wordpress',
       level: Level.Advanced
     },
     {
       id: 3,
       name: 'React',
       level: Level.Intermediate
     },
     {
       id: 4,
       name: 'Bicycling',
       level: Level.Advanced
     }
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  }

  getSkill(id: number): Skill {
    for (let i = 0; i < this.skills.length; i++) {
      if (this.skills[i].id === id) {
        return this.skills[i];
      }
    }
  }
  constructor() { }
}
