import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infectionData: any;
  dataTable = [];
  labelsTable = [];
  lineChartData: any[] = [
    {data: this.dataTable, label: 'Infected Cases' },
  ];

  lineChartLabels: Label[] = this.labelsTable;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#00b894',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';



  constructor(private dataService: DataService, private spinner: NgxSpinnerService) {

   }

  ngOnInit() {
    this.getIfectionData();
    this.getStatsdata();

  }

  getIfectionData() {
    this.dataService.getInfectionData().subscribe((res: any) => {
      this.spinner.show();
      this.infectionData = res;
      console.log("Recieved data => ", this.infectionData);
      this.spinner.hide();
    });
  }

  getStatsdata() {
    this.dataService.getStatsData().subscribe((res:[]) => {
      //console.log(res['snapshots']);
      let tempDataTable= [];
      tempDataTable = res['snapshots'];
      tempDataTable.map(c => {
        this.dataTable.push(c['cases']);
        // console.log(this.dataTable);
        this.labelsTable.push(c['timestamp']);
     //   console.log(this.labelsTable);
      }); // end map

      //this.lineChartData= this.dataTable.splice(this.dataTable.length-10, this.dataTable.length);
   //   this.lineChartLabels= this.labelsTable.splice(this.dataTable.length-10, this.dataTable.length);
console.log("aaaaa",this.dataTable);


    });
  }
}
