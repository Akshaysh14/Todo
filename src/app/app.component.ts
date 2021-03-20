import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Todos';
  todo = [
    { label: 'HTML/CSS', priority: 'High', done: true },
    { label: 'Bootstrap', priority: 'Low', done: true },
    { label: 'Angular', priority: 'High', done: true }
  ];
}
