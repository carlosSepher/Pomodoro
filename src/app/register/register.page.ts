import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string="";
  password: string="";

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    const user = await this.authService.register(this.email, this.password);
    if (user) {
      // Registro exitoso, redirigir a la página principal
      this.router.navigateByUrl('/home');
    } else {
      // Manejar el error de registro
      alert('Registration failed');
    }
  }
}
