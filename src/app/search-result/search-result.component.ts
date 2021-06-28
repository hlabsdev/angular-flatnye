import { Biens } from './../models/biens';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { BiensService } from '../services/biens.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  tabBien: any = [];
  tabBienBudget: any = [];
  constructor(private serviceB: BiensService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        const budget =+ params['budget'];
        this.getBienByBudget(budget)
      }
    )
  }

  ngOnInit(): void {
    console.log('tab',this.tabBienBudget)
  }

  getBienByBudget(budget: number) {

    this.serviceB.getAllBien().subscribe((res: any) => {
      this.tabBien = res && res.results ? res.results : [];
      console.log("bien budget",this.tabBien)
       this.tabBien.filter(item => {
        if (item.prix===budget) {
          console.log('fin', item)
          this.tabBienBudget.push(item)
        }
      })
       
    });
    
  }
}
