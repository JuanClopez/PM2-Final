import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Song } from 'src/app/song.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  song:any = {}; songId:any;
  constructor(
    public FS:FirestoreService,
    public AR:ActivatedRoute,
    public AC:AlertController,
    public R:Router
  ) { }

  ngOnInit() {
    this.songId = this.AR.snapshot.paramMap.get('id');
    this.song = this.FS.obtenerDetalleCancion(this.songId).valueChanges();
  }

  async eliminarCancion(){
    const alert = await this.AC.create({message: '¿Estás seguro de eliminar esta canción?', 
    buttons:  [
    {
      text: 'Cancelar', role: 'cancel', handler: blah => {
        console.log('Confirmar cancelación: blah');
      },
    },
    {
      text: 'Aceptar', handler: () => {
        this.FS.eliminarCancion(this.songId).then(()  => {
        this.R.navigateByUrl('');
    });
  },
  },],
  });
  await alert.present();
}
}