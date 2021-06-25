import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  public crearUsuarioFormulario: any;

  constructor(public LC: LoadingController, public AC: AlertController,
    public FS: FirestoreService, public FB: FormBuilder, public R: Router) { 
      this.crearUsuarioFormulario = FB.group({
        nombre_U: ['', Validators.required],
        apellido_U: ['', Validators.required],
        edad_U: ['', Validators.required],
        direccion_U: ['', Validators.required],
        estado_civil_U: ['', Validators.required],
        telefono_U: ['', Validators.required],
        profesion_U: ['', Validators.required],
        estrato_U: ['', Validators.required],
        cargo_U: ['', Validators.required],
        horas_trabajadas_U: ['', Validators.required],
        cantidad_alimentos_U: ['', Validators.required],
        nivel_estudio_U: ['', Validators.required],
        
      });
    }

  ngOnInit() {
  }

  async crearUsuario(){
    const loading= await this.LC.create();
    const nombre_U = this.crearUsuarioFormulario.value.nombre_U;
    const apellido_U = this.crearUsuarioFormulario.value.apellido_U;
    const edad_U = this.crearUsuarioFormulario.value.edad_U;
    const direccion_U = this.crearUsuarioFormulario.value.direccion_U;
    const estado_civil_U = this.crearUsuarioFormulario.value.direccion_U;
    const telefono_U = this.crearUsuarioFormulario.value.direccion_U;
    const profesion_U = this.crearUsuarioFormulario.value.direccion_U;
    const estrato_U = this.crearUsuarioFormulario.value.direccion_U;
    const cargo_U = this.crearUsuarioFormulario.value.direccion_U;
    const horas_trabajadas_U = this.crearUsuarioFormulario.value.direccion_U;
    const cantidad_alimentos_U = this.crearUsuarioFormulario.value.direccion_U;
    const nivel_estudio_U = this.crearUsuarioFormulario.value.direccion_U;
    
    this.FS.crearUsuario(nombre_U,apellido_U,edad_U,direccion_U,estado_civil_U,telefono_U,profesion_U,estrato_U,cargo_U,horas_trabajadas_U,cantidad_alimentos_U,nivel_estudio_U ).then(
      () => {
        loading.dismiss().then(() => {
          this.R.navigateByUrl('inicio');
        });
      },
      error => {
        console.error(error);
      });
      return await loading.present();
  }

}
