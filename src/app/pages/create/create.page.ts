import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public crearCancionFormulario: any;

  constructor(public LC: LoadingController, public AC: AlertController,
    public FS: FirestoreService, public FB: FormBuilder, public R: Router) { 
      this.crearCancionFormulario = FB.group({
        nombreAlbum: ['', Validators.required],
        nombreArtista: ['', Validators.required],
        descripcionCancion: ['', Validators.required],
        nombreCancion: ['', Validators.required],
      });
    }

  ngOnInit() {  }

  async crearCancion(){
    const loading= await this.LC.create();
    const nombreAlbum = this.crearCancionFormulario.value.nombreAlbum;
    const nombreArtista = this.crearCancionFormulario.value.nombreArtista;
    const descripcionCancion = this.crearCancionFormulario.value.descripcionCancion;
    const nombreCancion = this.crearCancionFormulario.value.nombreCancion;
    
    this.FS.crearCancion(nombreAlbum,nombreArtista,descripcionCancion,nombreCancion).then(
      () => {
        loading.dismiss().then(() => {
          this.R.navigateByUrl('');
        });
      },
      error => {
        console.error(error);
      });
      return await loading.present();
  }

}
