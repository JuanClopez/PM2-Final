import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  userList:any=[];
  constructor(private menu: MenuController,public FS:FirestoreService, public R:Router) { }

  ngOnInit() {
    this.userList = this.FS.obtenerListaUsuarios().valueChanges();
    
  }

  openFirst() {
     //this.menu.enable(true, 'first');
    // this.menu.open('first');
    this.menu.toggle();
  }




}
