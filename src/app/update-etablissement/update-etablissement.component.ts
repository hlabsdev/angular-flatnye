import { CompteService } from './../services/compte.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.css']
})
export class UpdateEtablissementComponent implements OnInit {

  public mon_compte: Observable<any>|Promise<any>|any;
  constructor(private route: ActivatedRoute, private serviceComp: CompteService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      
      this.serviceComp.getCompteById(id).subscribe((compte: any) => {
     
        
        this.mon_compte = compte
        console.log('compte', this.mon_compte)
     });
   });
   }

  ngOnInit(): void {
  }

}
