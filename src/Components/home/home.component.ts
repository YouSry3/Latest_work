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


         downloadFile(url:string, fileName:string) {
          // Open the file in a new tab


          // Wait a bit before triggering the download

              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', fileName); // Set custom file name
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
        
      }



}
