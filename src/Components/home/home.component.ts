import { Component } from '@angular/core';
import { SKilsComponent } from '../skils/skils.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SKilsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  DetermineToLink(params: string, url: string) {
    switch (params) {
      case "linkedin":
      case "github":
      case "facebook":
      case "youtube":
        window.open(url, '_blank');
        break;
      default:
        window.open(url, '_blank');
        break;
    }
  }

}
