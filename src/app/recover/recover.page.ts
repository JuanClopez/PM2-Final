import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  recoverForm: FormGroup;
  constructor(private FB: FormBuilder, private AC: AlertController, private r: Router, private AS: AuthService) { 
    this.buildForm();
  }


  ngOnInit() {
  }

  recuperarUsuario(event: Event): void {
    event.preventDefault();
    if (this.recoverForm.valid) {
      const value = this.recoverForm.value;
      this.AS.resetPassword(value.email).then(      
        async () => {
        const alerta = await this.AC.create({ message: 'Hemos enviado a tu correo un link para recuperar tu contraseña', buttons: [{ text: 'OK', role: 'cancel', handler:()=> {this.r.navigateByUrl('login');},
       }, ], });
        await alerta.present();
      }, async error=>{
        const Erroralert =await this.AC.create({
          message: error.message, buttons: [{text:'OK', role: 'cancel' }], 
        }); 
        await Erroralert.present(); } 
       ); }   
      }
    

  buildForm(){
    this.recoverForm=this.FB.group({
      email:['', [Validators.required, Validators.email]],
    });
  }

  get emailField(){ return this.recoverForm.get('email');}

}
