import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArray = [];
  evenArray = [];

  onReceiveNumbers(event: number) {
    event % 2 === 0 ? this.evenArray.push(event) : this.oddArray.push(event);
  }
}
