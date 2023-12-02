import { Component, OnInit } from '@angular/core';
import { Page, Person, PersonPage } from './page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-custom-webpack';

  page?: Page<Person>;

  ngOnInit(): void {
    this.page = new PersonPage(new Person(1, 'Rodrigo'), '1', '2');
  }
}
