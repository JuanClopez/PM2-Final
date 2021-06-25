import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {

  constructor(public LC: LoadingController, public AC: AlertController,
    public FS: FirestoreService, public FB: FormBuilder, public R: Router) { }

  ngOnInit() {
  }

}
