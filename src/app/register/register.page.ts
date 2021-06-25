import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  constructor(private FB: FormBuilder, private AC: AlertController, private r: Router, private AS: AuthService) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  async registrarUsuario(event: Event): Promise<void> {
    event.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      this.AS.singUser(value.email, value.password).then(() => {
        this.r.navigateByUrl('login');
      }, async error => {
        const alerta = await this.AC.create({ message: error.message, buttons: [{ text: 'OK', role: 'cancel' }], });
        await alerta.present();
      });
    }
  }

  private buildForm(){
    this.registerForm=this.FB.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength]],
    });
  }

  get emailField(){ return this.registerForm.get('email');}
  get passField(){ return this.registerForm.get('password');}

}
