import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private FB: FormBuilder, private AC: AlertController, private r: Router, private AS: AuthService) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  async ingresoUsuario(event: Event): Promise<void> {
    event.preventDefault();
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.AS.loginUser(value.email, value.password).then(() => {
        this.r.navigateByUrl('inicio');
      }, async error => {
        const alerta = await this.AC.create({ message: error.message, buttons: [{ text: 'OK', role: 'cancel' }], });
        await alerta.present();
      });
    }
  }

  private buildForm(){
    this.loginForm=this.FB.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength]],
    });
  }

  get emailField(){ return this.loginForm.get('email');}
  get passField(){ return this.loginForm.get('password');}


}


