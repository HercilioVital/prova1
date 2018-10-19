import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Recebendo os dados passados pelos inputs
  @ViewChild('inputedUsuario') usuario;
  @ViewChild('inputedSenha') senha;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController ) {
  }

  //Função responsável por realizar o login
  login(){
    let toast = this.toastCtrl.create({duration: 3500, position: 'bottom'});

    if (this.usuario.value == "hercilio" && this.senha.value == "herciliovital"){
      this.navCtrl.setRoot(HomePage);
      toast.setMessage('Seja bem vindo usuário : ' + this.usuario.value);
      toast.present();
    }else{
      toast.setMessage('Usuário não encontrado');
      toast.present();
    }
  }

  cadastro(){
    console.log("FUNÇÃO DO CLICK")
    this.navCtrl.push(CadastroPage)
  }

}
