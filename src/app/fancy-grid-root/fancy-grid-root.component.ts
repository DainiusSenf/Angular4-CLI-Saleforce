import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-grid-root',
  templateUrl: './fancy-grid-root.component.html',
  styleUrls: ['./fancy-grid-root.component.css']
})
export class FancyGridRootComponent implements OnInit {

  private name: string;
  private data;
  private config;
  constructor() {
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
    console.log(this.config)
  }

}
