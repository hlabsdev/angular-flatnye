import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-menu-bar',
  templateUrl: './v-menu-bar.component.html',
  styleUrls: ['./v-menu-bar.component.css']
})
export class VMenuBarComponent implements OnInit {
 
  currentuser = localStorage.getItem('users');
  constructor() { }

  showmenu:boolean = false;
  showcompte = false;

  onShowSmMenu() {
    this.showcompte = this.currentuser ? true : false;
    if (this.showmenu) {
      this.showmenu = false
    } else {
      this.showmenu = true
    }
  }

  ngOnInit(): void {
    

    //console.log("cc::",this.currentuser)
  }

}
