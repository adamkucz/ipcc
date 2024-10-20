import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about.mobile.component.css']
})
export class AboutComponent {

}
