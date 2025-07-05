import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {

  routes = [
    { path: '/', label: 'Home', class: '' },
    { path: '/sobre', label: 'Sobre', class: '' },
    { path: '/softwares', label: 'Softwares', class: '' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.verifyRoute();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.verifyRoute();
      });
  }

  navgate(page: string) {
    this.router.navigateByUrl(page);
  }

  verifyRoute() {
    const currentUrl = this.router.url;
    this.routes.forEach(rt => {
      rt.class = currentUrl === rt.path ? 'active' : '';
    });
  }
}
