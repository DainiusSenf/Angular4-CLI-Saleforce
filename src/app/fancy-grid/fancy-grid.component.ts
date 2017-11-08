import { Component, NgZone, OnInit, OnDestroy, AfterViewInit} from '@angular/core';

import { SalesforceService } from '../services/salesforce.service';
import { ClaimService } from '../services/claim.service';

declare var FancyGrid: any;

@Component({
  selector: 'app-fancy-grid',
  templateUrl: './fancy-grid.component.html',
  styleUrls: ['./fancy-grid.component.css']
})
export class FancyGridComponent implements OnInit, OnDestroy, AfterViewInit {

  private name: string;
  private data;
  private config;

  public myGrid;
  public userId;
  constructor(private zone: NgZone, private sfdc: SalesforceService,  private claimService: ClaimService) {
    this.userId = this.sfdc.conn.userInfo.id;

    this.name = 'Angular2';
    this.data = [
      ['Ted', 'Smith', 'Java Developer', 'ted.smith@gmail.com', 'Electrical Systems', 30, 'Java, Ruby'],
      ['Ed', 'Johnson', 'C/C++ Market Data Developer', 'ed.johnson@gmail.com', 'Energy and Oil', 35, 'C++'],
      ['Sam', 'Williams', 'Technical Analyst', 'sam.williams@gmail.com', 'Airbus', 38, ''],
      ['Alexander', 'Brown', 'Project Manager', 'alexander.brown@gmail.com', 'Renault', 24, ''],
      ['Nicholas', 'Miller', 'Senior Software Engineer', 'nicholas.miller@gmail.com', 'Adobe', 33, 'Unix, C/C++'],
      ['Andrew', 'Thompson', 'Agile Project Manager', 'andrew.thompson@gmail.com', 'Google', 28, ''],
      ['Ryan', 'Walker', 'Application Support Engineer', 'ryan.walker@gmail.com', 'Siemens', 39, 'ActionScript']
    ];

    this.config = {
      title: 'Title',
      renderTo: 'grid-1',
      width: 450,
      height: 400,
      selModel: 'cell',
      data: {
        fields: ['name', 'surname', 'position', 'email', 'company', 'age', 'knowledge'],
        items: this.data
      },
      defaults: {
        type: 'string',
        width: 100
      },
      columns: [{
        index: 'company',
        title: 'Company'
      }, {
        index: 'name',
        title: 'Name'
      }, {
        index: 'surname',
        title: 'Sur Name'
      }, {
        index: 'age',
        title: 'Age',
        width: 50,
        type: 'number'
      }]
    };

  }

  ngOnInit() {

    this.claimService.getClaimsByUserId(this.userId).then(res => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.myGrid = new FancyGrid(this.config);
    });
  }

  ngOnDestroy() {
    FancyGrid.get(this.myGrid['renderTo']).destroy();
  }
}


