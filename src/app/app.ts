import { Component } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  imports: [Employee],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
