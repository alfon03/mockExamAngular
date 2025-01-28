import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

}
