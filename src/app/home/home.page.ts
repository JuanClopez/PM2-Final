import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/song.interface';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  songList:any=[];

  constructor(public FS:FirestoreService, public R:Router) {}

  ngOnInit(){
    this.songList = this.FS.obtenerListaCancion().valueChanges();
  }
}
