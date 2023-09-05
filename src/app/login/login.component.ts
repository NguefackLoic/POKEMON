import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{  
  message: string = 'Vous etes deconnecté. (pikachu/pikachu)';
  name: string = 'pikachu';
  password: string = 'pikachu';
  auth: AuthService;
     
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous etes connecté';
    }else {
      this.message = 'Identifiant ou mot de passe incorrect.'
    }
  }

  login() {
    this.message = 'Tentative de connexion en cour...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn) {
          this.router.navigate(['/pokemons'])
        }else {
          this.password = '';
          this.router.navigate(['/login']);
        }
        
      })

  }

  logout() {
    this.auth.logout();
    this.message = 'Vous etes déconnecté.';

  }

}
