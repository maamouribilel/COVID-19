import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js';
import { Color, Label } from 'ng2-charts';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  label?: string;
  number: number;
	draggable: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lat = 35.59919355076173;
  lng = 9.624992224979998 ;
    // google maps zoom level
    zoom: number = 6.7;
    markers: marker[] = [
      {
        lat: 36.8296878473944,
        lng: 10.124534251973637,
        label: 'Tunis',
        number: 34,
        draggable: false
      },
      {
        lat: 36.675161898545305,
        lng: 10.218753437255579,
        label: 'Ben Arous',
        number: 12,
        draggable: false
      },
      {
        lat: 36.66577743735055,
        lng: 10.619411561738511,
        label: 'Nabeul',
        number: 1,
        draggable: false
      },
      {
        lat: 36.96561924096172,
        lng: 10.097932124711377,
        label: 'Ariana',
        number: 20,
        draggable: false
      },
      {
        lat: 37.14144514551905,
        lng: 9.597074191524406,
        label: 'Bizert',
        number: 3,
        draggable: false
      },
      {
        lat: 36.80973428883044,
        lng: 9.867113994811723,
        label: 'La Manouba',
        number: 1,
        draggable: false
      },
      {
        lat: 36.67648706798987,
        lng: 9.316922824336906,
        label: 'Beja',
        number: 0,
        draggable: false
      },
      {
        lat: 36.67648706798987,
        lng: 9.316922824336906,
        label: 'Jendouba',
        number: 0,
        draggable: false
      },
      {
        lat: 36.063713633929936,
        lng: 8.678384450825991,
        label: 'Le Kef',
        number: 0,
        draggable: false
      },
      {
        lat: 36.037066304075324,
        lng: 9.299111989888491,
        label: 'Siliana',
        number: 0,
        draggable: false
      },
      {
        lat: 36.40633301042683,
        lng: 10.011207361660679,
        label: 'Zaghouan',
        number: 1,
        draggable: false
      },
      {
        lat: 35.89956217310192,
        lng: 10.443783056807105,
        label: 'Sousse',
        number: 6,
        draggable: false
      },
      {
        lat: 35.763170489199084,
        lng: 9.839225623417498,
        label: 'Kairouan',
        number: 2,
        draggable: false,
      },
      {
        lat: 35.63447482915911,
        lng: 10.723483761067468,
        label: 'Monastir',
        number: 7,
        draggable: false
      },
      {
        lat: 35.383027014557854,
        lng: 10.860812862629968,
        label: 'Mahdia',
        number: 3,
        draggable: false
      },
      {
        lat: 35.29306159222377,
        lng: 8.7675770337282,
        label: 'Kasserine',
        number: 0,
        draggable: false
      },
      {
        lat: 34.90304961843806,
        lng: 9.502446209211598,
        label: 'Sidi Bouzid',
        number: 0,
        draggable: false
      },
      {
        lat: 34.74974960275333,
        lng: 10.395151421166918,
        label: 'Sfax',
        number: 5,
        draggable: false
      },
      {
        lat: 34.43255107554276,
        lng: 8.697205247115324,
        label: 'Gafsa',
        number: 1,
        draggable: false
      },
      {
        lat: 33.8144616330769,
        lng: 9.83858835439011,
        label: 'Gabès',
        number: 1,
        draggable: false
      },
      {
        lat: 33.39714680679499,
        lng: 10.760154322247088,
        label: 'Mednine',
        number: 9,
        draggable: false
      }
      ,
      {
        lat: 32.06167466405954,
        lng: 9.843601300436378,
        label: 'Tataouine',
        number: 6,
        draggable: false
      }
      ,
      {
        lat: 33.96043402368186,
        lng: 7.873555573095867,
        label: 'Tozeur',
        number: 0,
        draggable: false
      }
      ,
      {
        lat: 33.31076079071958,
        lng: 8.864260209156498,
        label: 'Kebili',
        number: 1,
        draggable: false
      }
    ]
   mapStyle=  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

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
      backgroundColor: '#00cec9',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'bar';



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
        this.labelsTable.push(c['timestamp'].substr(0,16));
        console.log(this.labelsTable);
      }); // end map

      //this.lineChartData= this.dataTable.splice(this.dataTable.length-10, this.dataTable.length);
   //   this.lineChartLabels= this.labelsTable.splice(this.dataTable.length-10, this.dataTable.length);
console.log("aaaaa",this.dataTable);


    });
  }

  mapClicked($event: MouseEvent) {
    /*
    this.markers.push({
      lat: $event['coords'].lat,
      lng: $event['coords'].lng,
      number: 0,
      draggable: true
    });
    */
  }
  clickedMarker(label: string, index: number) {
    /*
    console.log(`clicked the marker: ${label || index}`)
    */
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    /*
    console.log('dragEnd', m, $event);
    */
  }

}
