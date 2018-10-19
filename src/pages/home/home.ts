import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtividadeHistoriaPage } from '../atividade-historia/atividade-historia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  postDetalhes(){
    this.navCtrl.push(AtividadeHistoriaPage);
  }



}
