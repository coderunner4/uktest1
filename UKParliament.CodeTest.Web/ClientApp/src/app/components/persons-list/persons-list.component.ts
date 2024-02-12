import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { PersonViewModel } from '../../models/person-view-model';

// TODO: SOLID Violation Fix, move the add person logic out of here
@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {
  persons: PersonViewModel[] = [];

  constructor(
    private router: Router,
    private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe(pers => this.persons = pers);
  }

  addPerson(email: string): void {
    email = email.trim();
    if (!email) { return; }

    this.personService.addPerson({ 
      firstName: "", 
      lastName: email,
      email: email, 
      departmentId: 1
    } as PersonViewModel).subscribe(per => {
        this.persons.push(per);
      });
  }

  editPerson(id: string): void {
    this.router.navigate(['/person-edit', id]);
  }
}
