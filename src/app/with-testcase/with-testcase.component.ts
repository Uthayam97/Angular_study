import { Component } from '@angular/core';

@Component({
  selector: 'app-with-testcase',
  templateUrl: './with-testcase.component.html',
  styleUrls: ['./with-testcase.component.css']
})
export class WithTestcaseComponent {

  // ========================================
  // VARIABLES
  // ========================================

  name: string = '';

  email: string = '';

  // ========================================
  // REGISTER FUNCTION
  // ========================================

  register(): void {

    console.log('Name:', ;

    console.log(this.name.toUpperCase());

    alert('Register Successfully');

  }

}