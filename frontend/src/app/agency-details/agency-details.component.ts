import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {AgencyService} from '../agency.service'


import { AgencyComponent} from '../agency/agency.component';
@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent implements OnInit {
agency: any;

  constructor(private agencyService: AgencyService,
  private route: ActivatedRoute ) { }

    ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.agencyService.getAgency(+params.get('id')))
      .subscribe(agency => this.agency = agency);
  }


}

