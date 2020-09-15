import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartDataSets, ChartOptions, ChartPoint, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ViewEncapsulation, ViewChild } from '@angular/core';
import { Maps, Bubble, Legend, Zoom } from '@syncfusion/ej2-angular-maps';
import { tunisia_map } from './tunisia-map';
Maps.Inject(Bubble,Legend, Zoom);

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  number: any;
  draggable: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lat = 35.59919355076173;
  lng = 9.624992224979998;
  // google maps zoom level
  zoom: number = 5.8;
  markers: marker[] = [
    {
      lat: 36.8296878473944,
      lng: 10.124534251973637,
      label: 'Tunis',
      number: 828,
      draggable: false
    },
    {
      lat: 36.675161898545305,
      lng: 10.218753437255579,
      label: 'Ben Arous',
      number: 835,
      draggable: false
    },
    {
      lat: 36.66577743735055,
      lng: 10.619411561738511,
      label: 'Nabeul',
      number: 198,
      draggable: false
    },
    {
      lat: 36.96561924096172,
      lng: 10.097932124711377,
      label: 'Ariana',
      number: 381,
      draggable: false
    },
    {
      lat: 37.14144514551905,
      lng: 9.597074191524406,
      label: 'Bizerte',
      number: 96,
      draggable: false
    },
    {
      lat: 36.80973428883044,
      lng: 9.867113994811723,
      label: 'La Manouba',
      number: 112,
      draggable: false
    },

    {
      lat: 36.67648706798987,
      lng: 9.316922824336906,
      label: 'Beja',
      number: 27,
      draggable: false
    },

    {
      lat: 36.67648706798987,
      lng: 9.316922824336906,
      label: 'Jendouba',
      number: 110,
      draggable: false
    },
    {
      lat: 36.063713633929936,
      lng: 8.678384450825991,
      label: 'Le Kef',
      number: 330,
      draggable: false
    },
    {
      lat: 36.037066304075324,
      lng: 9.299111989888491,
      label: 'Siliana',
      number: 53,
      draggable: false
    },
    {
      lat: 36.40633301042683,
      lng: 10.011207361660679,
      label: 'Zaghouan',
      number: 16,
      draggable: false
    },
    {
      lat: 35.89956217310192,
      lng: 10.443783056807105,
      label: 'Sousse',
      number: 560,
      draggable: false
    },
    {
      lat: 35.763170489199084,
      lng: 9.839225623417498,
      label: 'Kairouan',
      number: 189,
      draggable: false,
    },
    {
      lat: 35.63447482915911,
      lng: 10.723483761067468,
      label: 'Monastir',
      number: 189,
      draggable: false
    },
    {
      lat: 35.383027014557854,
      lng: 10.860812862629968,
      label: 'Mahdia',
      number: 88,
      draggable: false
    },

    {
      lat: 35.29306159222377,
      lng: 8.7675770337282,
      label: 'Kasserine',
      number: 72,
      draggable: false
    },

    {
      lat: 34.90304961843806,
      lng: 9.502446209211598,
      label: 'Sidi Bouzid',
      number: 82,
      draggable: false
    },
    {
      lat: 34.74974960275333,
      lng: 10.395151421166918,
      label: 'Sfax',
      number: 246,
      draggable: false
    },
    {
      lat: 34.43255107554276,
      lng: 8.697205247115324,
      label: 'Gafsa',
      number: 83,
      draggable: false
    },
    {
      lat: 33.8144616330769,
      lng: 9.83858835439011,
      label: 'Gabès',
      number: 1010,
      draggable: false
    },
    {
      lat: 33.39714680679499,
      lng: 10.760154322247088,
      label: 'Mednine',
      number: 258,
      draggable: false
    }
    ,
    {
      lat: 32.06167466405954,
      lng: 9.843601300436378,
      label: 'Tataouine',
      number: 119,
      draggable: false
    }
    ,
    {
      lat: 33.96043402368186,
      lng: 7.873555573095867,
      label: 'Tozeur',
      number: 14,
      draggable: false
    },

    {
      lat: 33.31076079071958,
      lng: 8.864260209156498,
      label: 'Kebili',
      number: 177,
      draggable: false
    }
  ]
  mapStyle = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#212121'
        }
      ]
    },
    {
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#212121'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'administrative.country',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9e9e9e'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#bdbdbd'
        }
      ]
    },
    {
      'featureType': 'administrative.neighborhood',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'poi.business',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#181818'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#1b1b1b'
        }
      ]
    },
    {
      'featureType': 'road',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#2c2c2c'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#8a8a8a'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#373737'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#3c3c3c'
        }
      ]
    },
    {
      'featureType': 'road.highway.controlled_access',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#4e4e4e'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#616161'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#757575'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#3d3d3d'
        }
      ]
    }
  ];

  infectionData: any;
  dataTable1 = [];
  dataTable2 = [];
  dataTable3 = [];
  labelsTable = [];
  lineChartData: any[] = [
    { data: this.dataTable1, label: 'Cas Confirmés' },
    { data: this.dataTable2, label: 'Rétablis' },
    { data: this.dataTable3, label: 'Décès' },
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

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Importé'], ['Locaux']];
  // origine de contamination
  public pieChartData: number[] = [67, 33];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['#375a7f', '#00cec9'],
    },
  ];

  public polarAreaChartLabels: Label[] = ['0 - 15 ans', '15 - 30 ans', '30 - 45 ans', '45 - 60 ans', '60 ans et plus'];
  public polarAreaChartData: SingleDataSet = [2, 16, 24, 23, 23];
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';


  // new map data 
  public shapeData: Object = tunisia_map;
  public shapeDataPath: Object = 'name';
  public shapePropertyPath: Object = 'name';
  public bubbleSettings: Object = [{
    fill: '#d36565',
    colorMapping: [
      {
          from: 0, to: 400, minOpacity: 0.2, maxOpacity: 1, color: '#d36565'
      },
      {
          from: 400, to: 2000, minOpacity: 0.7, maxOpacity: 1, color: '#d36565'
      },
  ],
  colorValuePath: 'infection',
     visible: true,
     minRadius: 5,
     dataSource: [
      {name: "Manouba", infection:   116  },
      {name: "Beja",infection:       27   },
      {name: "Ben Arous",infection:  864  },
      {name: "Gabes", infection:     1044 },
      {name: "Gafsa",infection:      83   },
      {name: "Jendouba", infection:  110  },
      {name: "Kairouan", infection:  190  },
      {name: "Kasserine",infection:  73   },
      {name: "Kebili", infection:    190  },
      {name: "Le Kef", infection:    340  },
      {name: "Medenine", infection:  270  },
      {name: "Mahdia", infection:    90   },
      {name: "Tataouine",infection:  130  },
      {name: "Tozeur", infection:    14   },
      {name: "Zaghouan", infection:  16   },
      {name: "Monastir", infection:  442  },
      {name: "Sidi Bouzid",infection:82   },
      {name: "Siliana", infection:   59   },
      {name: "Sousse", infection:    601  },
      {name: "Ariana", infection:    395  },
      {name: "Bizerte", infection:   118   },
      {name: "Nabeul", infection:    213  },
      {name: "Tunis", infection:     883  },
      {name: "Sfax",infection:       284  }

     ],
     maxRadius: 30,
     valuePath: 'infection'
 }]
 public legendSettings: Object = {
 visible: false,
 type: 'Bubbles'
};
public dataLabelSettings: Object = {
  visible: false,
  labelPath: 'name',
};
public zoomSettings: Object = {
  enable: true,
  pinchZooming:true,
  doubleClickZoom:true
};

public barChartOptions: ChartOptions = {

  responsive: true,

  // We use these empty structures as placeholders for dynamic theming.

  scales: { xAxes: [{}], yAxes: [{}] },

  plugins: {

    datalabels: {

      anchor: 'end',

      align: 'end',

    }

  }

};

public barChartLabels: Label[] = [
"Manouba", 
"Beja",
"Ben Arous",
"Gabes", 
"Gafsa",
"Jendouba", 
"Kairouan", 
"Kasserine",
"Kebili", 
"Le Kef",
"Medenine", 
"Mahdia", 
"Tataouine",
"Tozeur",
"Zaghouan",
"Monastir",
"Sidi Bouzid",
"Siliana",
"Sousse",
"Ariana",
"Bizerte",
"Nabeul",
"Tunis",
"Sfax"
];

public barChartType: ChartType = 'bar';

public barChartLegend = true;

public barChartColors: Color[] = [
  { backgroundColor: '#d36666' },
]

public barChartData: ChartDataSets[] = [

  { data: [
116  ,
27   ,
864  ,
1044 ,
83   ,
110  ,
190  ,
73   ,
190  ,
340  ,
270  ,
90   ,
130  ,
14   ,
16   ,
442  ,
82   ,
59   ,
601  ,
395  ,
118  ,
213  ,
883  ,
284  
  ], label: 'Nombre de cas confirmés' },


];



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
      //  console.log("Recieved data => ", this.infectionData);
      this.spinner.hide();
    });
  }

  getStatsdata() {
    this.dataService.getStatsData().subscribe((res: []) => {
      //  console.log(res['snapshots']);
      let tempDataTable = [];
      tempDataTable = res['snapshots'];
      tempDataTable.map(c => {
        this.dataTable1.push(c['cases']);
        this.dataTable3.push(c['deaths']);
        this.dataTable2.push(c['recovered']);
        // console.log(this.dataTable);
        this.labelsTable.push(c['timestamp'].substr(0, 16));
        //  console.log(this.labelsTable);
      }); // end map

      //this.lineChartData= this.dataTable.splice(this.dataTable.length-10, this.dataTable.length);
      //   this.lineChartLabels= this.labelsTable.splice(this.dataTable.length-10, this.dataTable.length);
      // console.log("aaaaa",this.dataTable);


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

  localizePosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        /* Location tracking code */
        //this.currentLocation = position.coords;
        this.markers.push({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          label: '',
          number: 'Ma position',
          draggable: false
        });
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 9.5;
        //  console.log(position.coords);
      },
      (failure) => {
        if (failure.message.indexOf('Only secure origins are allowed') == 0) {
          alert('Only secure origins are allowed by your browser.');
        }
      }
    );
  }

}
