import { BiensService } from './../services/biens.service';
import { Biens } from './../models/biens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../services/compte.service';
import Stepper from 'bs-stepper'
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import axios from 'axios';
declare var $;

@Component({
  selector: 'app-ajouter-etablissement',
  templateUrl: './ajouter-etablissement.component.html',
  styleUrls: ['./ajouter-etablissement.component.css']
})
export class AjouterEtablissementComponent implements OnInit {

  medias: FormGroup;
  biens: FormGroup;
  stepper;
  myFiles: string[] = [];
  submitted = false;
  submit = false;
  bien: Biens;
  tabBien: any = [];
  tableauCompte: [];
  tableauNomCompte;


  baseUrl = environment.apiUrl;



  headersOption: any;


  constructor(
    private bienS: BiensService,
    private compteS: CompteService,
    private fb: FormBuilder,
    private http: HttpClient,
    
  ) {
    this.bienS.getAllBien().subscribe((res: any) => {
      this.tabBien = res && res.results ? res.results : [];
      //console.log('ddd:',this.tabBien)
    });
    this.getCompte();
  }
  //  ${JSON.parse(localStorage.getItem('currentUser')).token}
  ngOnInit(): void {
   

   
    this.controleBien();
    this.controleMedias();
    
   
  }

  controleBien() {
    this.biens = this.fb.group({
      titre: ['', Validators.required],
      coordonnee: ['', Validators.required],
      ville: ['', Validators.required],
      quartier: ['', Validators.required],
      liaison: ['', Validators.required],
      dimension: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      type: ['', Validators.required],
      categorie: ['', Validators.required],
      etat: ['', Validators.required],
      agence: ['', Validators.required],
    });
  }
  controleMedias() {
    this.medias = this.fb.group({
      titre: ['', Validators.required],
      type: ['', Validators.required],
      images: ['', Validators.required],
      liaison: ['', Validators.required]
    });
  }

  get fc() {
    return this.medias.controls;
  }
  onFileChange(event) {

    if (event.target.files.length > 0) {

      for (var i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        this.myFiles.push(event.target.files[i]);
      }
    }
  }


 

  sendMedias() {
    this.submitted = true;
    const titre = this.medias.get('titre').value;
    const type = this.medias.get('type').value;
    const liaison = this.medias.get('liaison').value;
    //const file = this.medias.get('images').value;
    let fichier:any
    console.log('Les infos aprés', this.myFiles);
    for (var i = 0; i < this.myFiles.length; i++) {
       fichier = this.myFiles[i]
    }
    console.log('Les infos fichier', fichier);

    var data = JSON.stringify({
      "titre": titre,
      "type": type,
      "fichier": fichier,
      "bien_decrit": liaison
     
    })

    console.log('data',data)
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 1edf79927e04a1d016a303aae85a2571dd0abe65'
      },
    };

    this.http.post('https://flatnyeapi.nunyalabprojets.com/api/media/', data, config)
      .toPromise()
      .then(res => {
        console.log('new Medias', res)
      }).catch(err => {
        console.log('error new', err)
      })
  }


  getCompte() {
    this.compteS.getAllcompte().subscribe(res => {
      console.log('compte :', res);
      this.tableauCompte = Object.values(res)[3];
      // console.log('compte tableau:', this.tableauCompte);
      for (res in this.tableauCompte) {
        this.tableauNomCompte = this.tableauCompte[res];
        // console.log('compte tableau for:', this.tableauNomCompte.nom);
      }
    });
  }

  saveBien() {
    // var axios = require('axios');
    var data = JSON.stringify({
      "titre": this.biens.get('titre').value,
      "localisation": this.biens.get('coordonnee').value,
      "ville": this.biens.get('ville').value,
      "quartier": this.biens.get('quartier').value,
      "dimensions": this.biens.get('dimension').value,
      "description": this.biens.get('description').value,
      "prix": this.biens.get('prix').value,
      "type": this.biens.get('type').value,
      "categorie": this.biens.get('categorie').value,
      "etat": this.biens.get('etat').value,
      "est_valide": true,
      "agence":this.biens.get('agence').value,
    })

    console.log('data',data)
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 1edf79927e04a1d016a303aae85a2571dd0abe65'
      },
    };

    this.http.post('https://flatnyeapi.nunyalabprojets.com/api/bien/', data, config)
      .toPromise()
      .then(res => {
        console.log('nez new ', res)
      }).catch(err => {
        console.log('error new', err)
      })
  }
}

  