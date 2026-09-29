import { Component } from '@angular/core';
import { ContentParentComponent } from './content-parent/content-parent';

@Component({
  imports: [ContentParentComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
