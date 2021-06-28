import { BiensService } from './../services/biens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-etablissement',
  templateUrl: './home-etablissement.component.html',
  styleUrls: ['./home-etablissement.component.css']
})
export class HomeEtablissementComponent implements OnInit {



  
  users = JSON.parse(localStorage.getItem('users'))
  profile=this.users.profile
  tabBien: any = [];
  tabMesBiens: any = [];
  constructor(private bienservice:BiensService) {
    //console.log('currentuser',this.currentuser)
     
  }

  mapSaved: boolean = false

  onMapSaved() {
    this.mapSaved = true
  }

  onMapUnSaved() {
    this.mapSaved = false
  }

  ngOnInit(): void {
    //console.log('home etablissement');
    
   
    console.log('usersss:', this.users.id)
    console.log('profile:', this.profile.id)

    this.bienservice.getAllBien().subscribe((res: any) => {
      this.tabBien = res && res.results ? res.results : [];

      this.tabBien.filter(item => {
        if (item.agence===this.profile.id) {
          console.log('fin', item)
          this.tabMesBiens.push(item)
        }
      })
       
    });
    
    
    
  }

}
