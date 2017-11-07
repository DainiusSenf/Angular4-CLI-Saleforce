import { Component, NgZone, OnInit, OnDestroy, AfterViewInit, Input} from '@angular/core';

import { SalesforceService, SOQL } from '../services/salesforce.service';
import { IContact } from '../shared/sobjects';

declare var FancyGrid: any;

@Component({
  selector: 'app-fancy-grid',
  templateUrl: './fancy-grid.component.html',
  styleUrls: ['./fancy-grid.component.css']
})
export class FancyGridComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() grid;

  private myGrid;
  private contacts;
  constructor(private zone: NgZone, private sfdc: SalesforceService) {
    console.log(this.grid)
   }

  ngOnInit() {
     let query = 'SELECT Id, Salutation, FirstName, LastName, Email FROM Contact';
        let s = new SOQL()
                    .select('Id', 'Salutation', 'FirstName', 'LastName', 'PhotoUrl')
                    .from('Contact');
        this.sfdc.execute('executeQuery', { query: s.soql })
            .then((res) => {
                this.contacts = res;
                this.contacts.map((c) => {
                    c.state = 'normal';
                    c.PhotoUrl = this.sfdc.instanceUrl + c.PhotoUrl;
                });
            }, (err) => {
                console.log(err)
            });
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.myGrid = new FancyGrid(this.grid);
    });
  }

  ngOnDestroy() {
    FancyGrid.get(this.grid['renderTo']).destroy();
  }
}


