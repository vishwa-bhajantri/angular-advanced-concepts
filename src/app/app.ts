import { Component } from '@angular/core';
import { ViewChildDemo } from './view-child-demo/view-child-demo';

@Component({
  imports: [ViewChildDemo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
