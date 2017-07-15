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
  //   this.agencyService.create(name)
  //     .then(agency => {
  //       this.agencies.push(agency);
  //       this.selectedagency = null;
  //     });
  // }

  delete(agency): void {
    this.agencyService
        .delete(agency._id)
        .then(() => {
          this.agencies = this.agencies.filter(h => h !== agency);
          if (this.selectedAgency === agency) { this.selectedAgency = null; }
        });
  }

  // ngOnInit(): void {
  //   this.getagencies();
  // }

  onSelect(agency): void {
    this.selectedAgency = agency;
  }
  agencyIsSelected(): void {
    console.log('agency', this.selectedAgency)
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedagency.id]);
  // }

}
