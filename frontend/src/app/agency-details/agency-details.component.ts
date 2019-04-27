import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import {AgencyService} from '../services/agency.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AgencyComponent} from '../agency/agency.component';
@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent implements OnInit {
@Input() agencyToDetails: any;
@Input() user: any;
err: any;
agencyID: string;
theAgency: any ={};

  constructor(private agencyService: AgencyService,
     private route: ActivatedRoute,
     private routetheuser: Router) { }

    ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.agencyID = params.get('id');
    this.agencyService.getAgencyDetailsinService(this.agencyID).subscribe(response => {
      this.theAgency = response.json();
      console.log('agency detail', this.theAgency)
      this.printInfo(response);
      this.printInfo(this.theAgency.nameAgency);
    })
    });
  }

  printInfo(info){
    console.log( 'The info',info)
  }
    selectAgency(id) {
    this.agencyService.selectAgen(id)
    .then((theUserfromapi) => {
      this.routetheuser.navigate(['/portal']);
    })
      .catch((err) => {
      this.user = null;
      this.err = err;
      });
    }

  }


  // getAgencyDetails(id) {
  //   this.agencyService.getAgencyDetailsinService(id)
  //   .then((theAgencyDetails) => {
  //     this.agency = theAgencyDetails;
  //     console.log('----', theAgencyDetails)
  //     console.log('----', this.agency)
  //   })
  //     .catch((err) => {
  //       this.err = 'Could not retreive phone details';
  //     });
  // }




