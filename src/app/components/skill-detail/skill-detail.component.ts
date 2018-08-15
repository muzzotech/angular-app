import { Component, OnInit } from '@angular/core';

import { SkillsService } from '../../modules/skills/services/skills.service';
import { Skill } from '../../shared/models/skill';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})
export class SkillDetailComponent implements OnInit {
  skill: Skill[];
  dataService: SkillsService;


  constructor(private skillsService: SkillsService, private route: ActivatedRoute) {
    this.dataService = this.skillsService;
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getSkill(id);
  }

}
