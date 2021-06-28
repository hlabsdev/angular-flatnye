import { Biens } from './../models/biens';
import { BiensService } from './../services/biens.service';
import { Component, OnInit } from '@angular/core';
import { MediasService } from '../services/medias.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  biens = new FormGroup({
   
    budget: new FormControl('', [Validators.required])
  });
  tabBien: any = [];
  pageSize=12
  p: number = 1;
  constructor(private serviceB: BiensService,private fb: FormBuilder,private _router:Router) {
    this.getAllBie();
    
  }

  ngOnInit(): void {
    

  }

 

  getAllBie() {
    this.serviceB.getAllBien().subscribe((res: any) => {
      this.tabBien = res && res.results ? res.results : [];
       
    });

  }
  like(item) {
    console.log('i like ', item);
  }

  recherche() {
    console.log("budget::", this.biens.get('budget').value);
     this._router.navigate(['/search/result/',this.biens.get('budget').value]);
  }
  onSubmit(form: NgForm) {
    //console.log("budget::", form.montant.value);
    this._router.navigate(['/search/result/',form.value]);
 } 
}
