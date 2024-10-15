import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  currentUrl: string = ''
  mobile: boolean = window.innerWidth <= 1000
  showMobileNav: boolean = false

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.mobile = window.innerWidth <= 1279
  }

  public isActive(route: string): boolean {
    console.log("currentUrl: " + this.currentUrl)
    console.log("route: " + route)
    console.log(this.currentUrl === route)
    return this.currentUrl === route;
  }

  public toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav
    console.log("showMobileNav:" + this.showMobileNav)
  }
  

}
