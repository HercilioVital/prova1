import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  materias: string [];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['book', 'add', 'bonfire', 'md-globe', 'md-brush','ios-bug-outline', 'ios-chatbubbles-outline'];
    this.materias = ['Portguês', 'Matemática', 'História', 'Geografia', 'Artes', 'ciências','Inglês']

    this.items = [];
    for (let i = 0; i < this.materias.length; i++) {
      this.items.push({
        title: this.materias[i],
        note: 'Atividades de ' + this.materias[i],
        icon: this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
