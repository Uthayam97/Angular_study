import { Component } from '@angular/core';

@Component({
  selector: 'app-without-testcase',
  templateUrl: './without-testcase.component.html',
  styleUrls: ['./without-testcase.component.css']
})
export class WithoutTestcaseComponent {

  // =========================
  // VARIABLES
  // =========================

  name: any;

  email: any;

  // =========================
  // REGISTER FUNCTION
  // =========================

  register(): void {

    // ERROR 1
    // console.log(this.username);

    // ERROR 2
    console.log(this.name.toUpperCase());

    // ERROR 3
    const total = 10 / 0;

    console.log(total);

    alert('Register Successfully');

  }

}