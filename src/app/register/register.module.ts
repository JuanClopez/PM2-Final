import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { firebaseConfig } from '../credenciales';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase';
import { RegisterPage } from './register.page';
firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
