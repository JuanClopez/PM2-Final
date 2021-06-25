import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/users.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
import { EnviarService } from '../../enviar.service';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.page.html',
  styleUrls: ['./detalle-user.page.scss'],
})
export class DetalleUserPage implements OnInit {

  user:any = {}; userId:any;
  test:any = {};
  ruta:string;
  constructor(
    public FS:FirestoreService,
    public AR:ActivatedRoute,
    public AC:AlertController,
    public R:Router,
    private enviarService: EnviarService
  ) { }

  ngOnInit() {
    this.userId = this.AR.snapshot.paramMap.get('id');
    this.user = this.FS.obtenerDetalleUsuario(this.userId).valueChanges();
    this.enviarService.setSumatorio(this.userId);
    this.test = this.FS.obtenerDetalleTest(this.userId).valueChanges();

  }

}
