import { Component } from '@angular/core';

@Component({
  selector: 'email-form',
  templateUrl: 'email-form.html'
})
export class EmailFormComponent {

  text: string;

  constructor() {
    console.log('Hello EmailFormComponent Component');
    this.text = 'Hello World';
  }

}
