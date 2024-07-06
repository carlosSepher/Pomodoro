import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  async onSubmit() {
    const user = await this.authService.login(this.email, this.password);
    if (user) {
      // Inicio de sesión exitoso, redirigir a la página principal
      this.router.navigateByUrl('/home');
    } else {
      // Manejar el error de inicio de sesión
      alert('Login failed');
    }
  }
}
