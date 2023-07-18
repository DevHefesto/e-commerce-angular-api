import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _router: Router, private _loginService: LoginService) { }

  logout() {
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }

}
