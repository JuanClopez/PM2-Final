import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnviarService {
  private ListPregunta = new BehaviorSubject<{}>({});
  private paraArray = new BehaviorSubject<any[]>([]);

  private userId:string ="";

  $getListPreguntaSource = this.ListPregunta.asObservable();
  constructor() { }


  sendListPregunta(data:any){
    this.ListPregunta.next(data);
  }

  private medidor: number=100;
  private porcentaje: number=0.5;

  public setSumatorio(valor: number) {
    this.medidor = valor;
  }
  
  public getSumatorio() {
    return this.medidor;
  }

  public setPorcentaje(valor: number) {
    this.porcentaje = valor;
  }
  
  public getPorcentaje() {
    return this.porcentaje;
  }

  public setId(valor: string) {
    this.userId = valor;
  }
  
  public getId() {
    return this.medidor;
  }

}