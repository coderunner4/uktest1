import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonService } from '../../services/person.service';
import { PersonViewModel } from '../../models/person-view-model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  person: PersonViewModel | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getPersonById(id: number): void {
    this.personService.getById(id)
      .subscribe(per => this.person = per);
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.getPersonById(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.person) {
      this.personService.savePerson(this.person)
        .subscribe(() => this.goBack());
    }
  }
}
