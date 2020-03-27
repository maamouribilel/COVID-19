import { Component, OnInit, ElementRef, ViewChild, TemplateRef, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-world-info',
  templateUrl: './world-info.component.html',
  styleUrls: ['./world-info.component.scss'],
})
export class WorldInfoComponent implements OnInit {
  //https://swimlane.gitbook.io/ngx-datatable/themes
  /*rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  */

  /*
    "country": "China",
    "cases": 81285,
    "todayCases": 67,
    "deaths": 3287,
    "todayDeaths": 6,
    "recovered": 74051,
    "active": 3947,
    "critical": 1235,
    "casesPerOneMillion": 56,
    "deathsPerOneMillion": 2
  */
  @ViewChild('flagTemplate', { static: true }) public flagTemplate: TemplateRef<any>;
  @ViewChild('table', { static: false }) table;
  rows: any[] = [];
  filteredData: any[] = [];
  data: any[] = [];
  flags: any = [];
  isLoading: boolean = false;
  allColumns: any[] = [];
  columns: any[] = [];
//resizing listener
@HostListener('window:resize', ['$event'])
    onResize(event) {
        //if mobile
        if (event.target.innerWidth < 1024) {
            this.columns = this.columns.filter(x => x.prop != 'critical');
          //  this.columns = this.columns.filter(x => x.prop != 'countryInfo.flag');
            this.columns = this.columns.filter(x => x.prop != 'deathsPerOneMillion');
            this.columns = this.columns.filter(x => x.prop != 'casesPerOneMillion');
            this.columns = this.columns.filter(x => x.prop != 'active');
            // this.columns = this.columns.filter(x => x.prop != 'recovered');
        } else {
            this.columns = this.allColumns;
        }
    }


  constructor(private dataService: DataService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

    this.columns = [
      { prop: 'countryInfo.flag', name: 'flag', cellTemplate: this.flagTemplate },
      { prop: 'country' },
      { prop: 'cases' },
      { prop: 'todayCases' },
      { prop: 'deaths' },
      { prop: 'todayDeaths' },
      { prop: 'recovered' },
      { prop: 'active' },
      { prop: 'critical' },
      { prop: 'casesPerOneMillion', name: 'Cases/1mil' },
      { prop: 'deathsPerOneMillion', name: 'Deaths/1mil' },
    ];
    this.allColumns = [
      { prop: 'countryInfo.flag', name: 'flag', cellTemplate: this.flagTemplate },
      { prop: 'country' },
      { prop: 'cases' },
      { prop: 'todayCases' },
      { prop: 'deaths' },
      { prop: 'todayDeaths' },
      { prop: 'recovered' },
      { prop: 'active' },
      { prop: 'critical' },
      { prop: 'casesPerOneMillion', name: 'Cases/1mil' },
      { prop: 'deathsPerOneMillion', name: 'Deaths/1mil' },
    ];
    this.hideColmunsMobile();
    this.initDatatable();
  }

  initDatatable() {
    this.spinner.show();
    this.dataService.getWorldInfo().subscribe((res: []) => {
    //  console.log("world info ", res);
      this.data = res;
      this.rows = res;
      this.rows = [...this.rows];
      this.filteredData = res;
      this.spinner.hide();
    });
  }


  // filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.rows[0]);
    //    this.filteredData.splice(1,1);
    // assign filtered matches to the active datatable
    this.data = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
      //  console.log(item[keys[i]]);
        if (!item[keys[i]]) {
          return ;
        } else {
          // check for a match
          if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            // found match, return true to add to result set
            return true;
          }
        }

      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

hideColmunsMobile(){

    //if mobile
    if (window.innerWidth < 1024) {
      this.columns = this.columns.filter(x => x.prop != 'critical');
      //  this.columns = this.columns.filter(x => x.prop != 'countryInfo.flag');
        this.columns = this.columns.filter(x => x.prop != 'deathsPerOneMillion');
        this.columns = this.columns.filter(x => x.prop != 'casesPerOneMillion');
        this.columns = this.columns.filter(x => x.prop != 'active');
      //  this.columns = this.columns.filter(x => x.prop != 'recovered');
    } else {
        this.columns = this.allColumns;
    }

}

}
