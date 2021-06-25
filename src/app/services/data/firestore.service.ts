import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
  from '@angular/fire/firestore';
import { Song } from 'src/app/song.interface'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public FS: AngularFirestore) { }

  crearUsuario(nombre_U: string, apellido_U: string, edad_U: string, direccion_U: string, estado_civil_U: string,
    telefono_U: string, profesion_U: string, estrato_U: string, cargo_U: string, horas_trabajadas_U: string,
    cantidad_alimentos_U: string, nivel_estudio_U: string): Promise<void> {
    const id = this.FS.createId();
    const test_U = "";
    const nivel_U = "";
    const message_U = "";
    const ruta_U = "";
    return this.FS.doc(`userList/${id}`).set({
      id, nombre_U, apellido_U,
      edad_U, direccion_U, estado_civil_U, telefono_U, profesion_U, estrato_U, cargo_U, horas_trabajadas_U,
      cantidad_alimentos_U, nivel_estudio_U, test_U, nivel_U, message_U, ruta_U
    });
  }

  actualizarTest(id: string, test_U: string, nivel_U: string, message_U:string, ruta_U: string): Promise<void> {
    
    return this.FS.doc(`testList/${id}`).set({
      id,
      test_U,
      nivel_U,
      message_U, 
      ruta_U 
    });
  }

  obtenerListaUsuarios(): AngularFirestoreCollection<Song> {
    return this.FS.collection(`userList`);
  }

  obtenerDetalleUsuario(userId: string): AngularFirestoreDocument<Song> {
    return this.FS.collection(`userList`).doc(userId);
  }

  obtenerDetalleTest(userId: string): AngularFirestoreDocument<Song> {
    return this.FS.collection(`testList`).doc(userId);
  }

  crearCancion(nombreAlbum: string, nombreArtista: string, descripcionCancion: string,
    nombreCancion: string): Promise<void> {
    const id = this.FS.createId();
    return this.FS.doc(`songList/${id}`).set({
      id, nombreAlbum, nombreArtista,
      descripcionCancion, nombreCancion
    });
  }

  obtenerListaCancion(): AngularFirestoreCollection<Song> {
    return this.FS.collection(`songList`);
  }

  obtenerDetalleCancion(songId: string): AngularFirestoreDocument<Song> {
    return this.FS.collection(`songList`).doc(songId);
  }

  eliminarCancion(songId: string): Promise<void> {
    return this.FS.doc(`songList/${songId}`).delete();
  }



}
