import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BiensService } from '../services/biens.service';
import { MediasService } from '../services/medias.service';

@Component({
  selector: 'app-show-house-etablissement',
  templateUrl: './show-house-etablissement.component.html',
  styleUrls: ['./show-house-etablissement.component.css']
})
export class ShowHouseEtablissementComponent implements OnInit {

  public biens: Observable<any>|Promise<any>|any;
  public medias: Observable<any>|Promise<any>|any;
  
  
  mediasId: any;
  mediasid: any;

  constructor(private route: ActivatedRoute,private serviceB: BiensService,
    private mediasService: MediasService) {
    
      this.route.params.subscribe(params => {
        const id = params['id'];
        
        this.serviceB.getBienById(id).subscribe((bien: any) => {
         
          this.biens = bien;
          this.mediasId = Object.values(bien.media_set)[0]
          const id_medias=this.mediasId.id
          //console.log('bbb:',this.mediasId.id)

        this.mediasService.geMediasById(id_medias).toPromise()
        .then((media: any)=> {
          this.medias = media
          console.log('bbb:',this.medias)
        }).catch(err => console.log('err', err))
       });
     });
    
    }

  ngOnInit(): void {
  }

}
