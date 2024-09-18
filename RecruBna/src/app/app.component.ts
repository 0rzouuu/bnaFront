import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecruBna';
  showButton: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Check for navigation changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide the button if the current route is '/postuler'
        this.showButton = event.url !== '/postuler';
      }
    });
  }
}
