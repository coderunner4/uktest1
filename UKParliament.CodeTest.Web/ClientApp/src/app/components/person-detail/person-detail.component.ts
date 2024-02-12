import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonService } from '../../services/person.service';
import { PersonViewModel } from '../../models/person-view-model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
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

  edit(): void {
    if (this.person) {
      this.router.navigate([`/person-edit/${this.person.id}`])
    }
  }
}
