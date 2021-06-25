import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';
import { EnviarService } from '../../enviar.service';
import { AuthService } from 'src/app/services/auth.service';

interface Opciones {
  id: number;
  detalle: string;
}

interface Preguntas {
  id: number;
  detalle: string;
}

interface resultados {
  id: number;
  detalle: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})

export class TestPage implements OnInit {

  ngOnInit() {
    
  }

  result: resultados[] = [
    {
      id: 1,
      detalle: 'No existe síntoma alguno de estrés. Tienes un buen equilibrio, continúa así y contagia a los demás de tus estrategias de afrontamiento!',
    },
    {
      id: 2,
      detalle: 'Te encuentras en fase de alarma, trata de identificar el o los factores que te causan estrés para poder ocuparte de ellos de manera preventiva.',
    },
    {
      id: 3,
      detalle: 'Haz conciencia de la situación en la que te encuentras y trata de ubicar qué puedes modificar, ya que si la situación estresante se prolonga, puedes romper tu equilibrio entre lo laboral y lo personal. No agotes tus resistencias.',
    },
    {
      id: 4,
      detalle: 'Te encuentras en una fase de agotamiento de recursos fisiológicos con desgaste físico y mental. Esto puede tener consecuencias más serias para tu salud.',
    },
    {
      id: 5,
      detalle: 'Busca ayuda.',
    }
  ];

  message:string;
  ruta:string;
  avance: number = 0;

  cont: number = 0;
  q1a: boolean = false;
  q2a: boolean = false;
  q3a: boolean = false;
  q4a: boolean = false;
  q5a: boolean = false;
  q6a: boolean = false;
  q7a: boolean = false;
  q8a: boolean = false;
  q9a: boolean = false;
  q10a: boolean = false;
  q11a: boolean = false;
  q12a: boolean = false;

  res: number = 0;
  por: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
  q10: number;
  q11: number;
  q12: number;

  pregunta: Preguntas[] = [
    {
      id: 1,
      detalle: 'Imposibilidad de conciliar el sueño',
    },
    {
      id: 2,
      detalle: 'Jaquecas y dolores de cabeza',
    },
    {
      id: 3,
      detalle: 'Indigestiones o molestias gastrointestinales',
    },
    {
      id: 4,
      detalle: 'Sensación de cansancio extremo o agotamiento',
    },
    {
      id: 5,
      detalle: 'Tendencia de comer, beber o fumar mas de lo habitual',
    },
    {
      id: 6,
      detalle: 'Disminución del interés sexual',
    },
    {
      id: 7,
      detalle: 'Respiración entrecortada o sensacion de ahogo',
    },
    {
      id: 8,
      detalle: 'Disminución del apetito',
    },
    {
      id: 9,
      detalle: 'Temblores Musculares (Tips nerviosos o parpadeos)',
    },
    {
      id: 10,
      detalle:
        'Pinchazos o sensaciones dolorosas en distintas partes del cuerpo',
    },
    {
      id: 11,
      detalle: 'Tentaciones fuertes de no levantarse por la mañana',
    },
    {
      id: 12,
      detalle: 'Tendencias a sudar o palpitaciones',
    },
  ];

  opcion: Opciones[] = [
    {
      id: 1,
      detalle: 'Nunca',
    },
    {
      id: 2,
      detalle: 'Casi Nunca',
    },
    {
      id: 3,
      detalle: 'Pocas Veces',
    },
    {
      id: 4,
      detalle: 'Algunas Veces',
    },
    {
      id: 5,
      detalle: 'Relativamente Frecuente',
    },
    {
      id: 6,
      detalle: 'Muy Frecuente',
    },
  ];

  user:any = {}; userId:any;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    public alertController: AlertController,
    private enviarService: EnviarService,
    public FS:FirestoreService,
    AS: AuthService,
    public LC: LoadingController,
    public AR:ActivatedRoute,
    public R:Router
  ) {}


  public submit() {
    if (
      this.q1 &&
      this.q2 &&
      this.q3 &&
      this.q4 &&
      this.q5 &&
      this.q6 &&
      this.q7 &&
      this.q8 &&
      this.q9 &&
      this.q10 &&
      this.q11 &&
      this.q12
    ) {
      this.res = this.calcularEstres();
      this.por = this.porcentaje();
      this.userId = this.enviarService.getId();
      this.recomendacion();

      this.actualizarTest();
      

    } else {
      console.log('No entro');
      this.presentAlert();
    }
  }

  goReceiver() {
    this.enviarService.sendListPregunta(this.pregunta);
    this.router.navigate(['/resultado']);
  }

  
  async actualizarTest(){
    const loading= await this.LC.create();
    
    this.FS.actualizarTest( this.userId, this.res.toString(), this.por.toString(), this.message, this.ruta ).then(
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Debe de responder todas las preguntas',
      buttons: ['Confirmar'],
    });
    await alert.present();
  }

  progeso() {
    if (!this.q1a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q2a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q3a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q4a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q5a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q6a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q7a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q8a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q9a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q10a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q11a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    } else if (!this.q12a) {
      this.cont = this.cont + 1;
      this.avance = this.cont / 12;
    }
  }

  calcularEstres() {
    return (
      this.q1 +
      this.q2 +
      this.q3 +
      this.q4 +
      this.q5 +
      this.q6 +
      this.q7 +
      this.q8 +
      this.q9 +
      this.q10 +
      this.q11 +
      this.q12
    );
  }

  recomendacion(){
    if (this.res <= 12){
      this.message = this.result[0].detalle;
      this.ruta="../../assets/icon/Sin-estres-0-12.png";
    } 
    else if (this.res <= 24){
      this.message = this.result[1].detalle;
      this.ruta="../../assets/icon/Sin-estres-12-24.png";
    }
    else if (this.res <= 36){
      this.message = this.result[1].detalle;
      this.ruta="../../assets/icon/estres-leve-24-36.png";
    }
    else if (this.res <= 48){
      this.message = this.result[2].detalle;
      this.ruta="../../assets/icon/estres-medio-36-48.png";
    }
    else if (this.res <= 60){
      this.message = this.result[3].detalle;
      this.ruta="../../assets/icon/estres-alto-48-60.png";
    }
    else if (this.res <= 72){
      this.message = this.result[4].detalle;
      this.ruta="../../assets/icon/estres-grave-60-72.png";
    }
  }

  porcentaje() {
    if (this.res<=12){
      return  
    }else{
      return (this.res / 72) * 100;
    }
    
  }
}
