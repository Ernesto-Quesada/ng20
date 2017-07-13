import { Component, OnInit } from '@angular/core';
import {AgencyService} from '../agency.service'
@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
agencies: any
selectedAgency:any
  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.getAgencies();
  }
  getAgencies(): void {
    this.agencyService
        .getAgencies()
        .then(agency => this.agencies = agency);
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroService
  //       .delete(hero.id)
  //       .then(() => {
  //         this.heroes = this.heroes.filter(h => h !== hero);
  //         if (this.selectedHero === hero) { this.selectedHero = null; }
  //       });
  // }

  // ngOnInit(): void {
  //   this.getHeroes();
  // }

  onSelect(agency): void {
    this.selectedAgency = agency;
  }
  agencyIsSelected(): void {
    console.log('agency', this.selectedAgency)
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }

}
