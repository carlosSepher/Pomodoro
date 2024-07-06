import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit{
  email: string="";
  password: string="";

  constructor(private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}


  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/home');
      }
    });
  }

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
