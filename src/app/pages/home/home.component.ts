import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.mobile.component.css']
})
export class HomeComponent {

  mobile: boolean = window.innerWidth <= 800

  @HostListener('window:resize')
  onResize() {
    this.mobile = window.innerWidth <= 800
  }

}
