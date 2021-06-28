import { Component, OnInit } from '@angular/core';
import { BiensService } from '../services/biens.service';
import { MediasService } from '../services/medias.service';

@Component({
  selector: 'app-decouvrir-plus',
  templateUrl: './decouvrir-plus.component.html',
  styleUrls: ['./decouvrir-plus.component.css']
})
export class DecouvrirPlusComponent implements OnInit {

  tabBien: any = [];
   tabMedias: any = [];
   tableau: any;
   tablem: any;
   image: any;
   myid: any;
  contenu: any;
  pageSize=12
  p: number = 1;
  constructor(private serviceB: BiensService, private serviceM: MediasService) {
     this.getAllBie();
     // this.getBienById(5)
   }

  ngOnInit(): void {
  }


  getAllBie(){

  this.serviceB.getAllBien().subscribe(res => {
      //console.log('resultat objet biens:', res);
      this.tabBien = Object.values(res)[3];

      //console.log('resultat du tableau :', this.tabBien);

       // tslint:disable-next-line: prefer-for-of
      for (let _i = 0; _i < this.tabBien.length; _i++){

           this.tableau = this.tabBien[_i].id;

           console.log('resultat du for :', this.tableau);
          }

    });

    this.serviceM.getAllMedias().subscribe(donne => {
      //console.log(' donnée du medias objet :', donne);
      this.tabMedias = Object.values(donne)[3];

      //console.log('données du tableau media :', this.tabMedias);

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.tabMedias.length; i++){

          this.tablem = this.tabMedias[i].id;

          console.log('resultat du for medias :', this.tablem);
      }

    });
  }

}
