import { Component } from '@angular/core';
import { HighchartsChartComponent, providePartialHighcharts } from 'highcharts-angular';


@Component({
  selector: 'app-dashboard',
  imports: [HighchartsChartComponent],
  providers: [
    providePartialHighcharts({
      modules: () => {
        return [
          import('highcharts/esm/modules/heatmap'),
          import('highcharts/esm/modules/pictorial'),
          import('highcharts/esm/modules/variwide'),

          // import('highcharts/esm/modules/scatter3d'),
          
          import('highcharts/highcharts-3d')
        ];
      }
    }),
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  chartOptions1: Highcharts.Options = { 
  title: {
    text: 'Investment Distribution - Area Chart'
  },
  xAxis: {
    title: {
      text: 'Sectors'
    },
    categories: ['Agriculture', 'IT', 'Automobile', 'Electronics']
  },
  yAxis: {
    title: {
      text: 'Investment Amount (in millions)'
    }
  },
  series: [{
    type: 'area',
    data: [
      { name: 'Agriculture', y: 30 },
      { name: 'IT', y: 50 },
      { name: 'Automobile', y: 20 },
      { name: 'Electronics', y: 40 }
    ]
  }]
 }; 

  chartOptions2: Highcharts.Options = {
    title: {
      text: 'Sector Performance - Heatmap'
    },
    xAxis: {
      categories: ['Agriculture', 'IT', 'Automobile', 'Electronics'],
      title: { text: 'Sectors' }
    },
    yAxis: {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      title: { text: 'Quarters' }
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: '#FF5733'
    },
    series: [{
      type: 'heatmap',
      data: [
        [0, 0, 10],[0, 1, 15],[0, 2, 20],[0, 3, 25],
        [1, 0, 30],[1, 1, 35],[1, 2, 40],[1, 3, 45],
        [2, 0, 50],[2, 1, 55],[2, 2, 60],[2, 3, 65],
        [3, 0, 70],[3, 1, 75],[3, 2, 80],[3, 3, 85]
      ],
      dataLabels: { enabled: true, color: '#000000' }
    }]
  };

  chartOptions3: Highcharts.Options = {
    title: { text: 'Sector Representation - Pictorial Series' },
    subtitle: { text: 'Each icon represents investment magnitude per sector' },
    xAxis: {
      categories: ['Agriculture', 'IT', 'Automobile', 'Electronics'],
      title: { text: 'Sectors' }
    },
    yAxis: { title: { text: 'Investment Amount (in millions)' } },
    series: [{
      type: 'pictorial',
      // Use a custom SVG path for a bank/building icon. Prefixed with 'path://'
      // @ts-ignore: Highcharts typings may not include pictorial marker symbol
      marker: {
        symbol: 'path://M2 10 L10 2 L18 10 L18 22 L2 22 Z M6 22 L6 14 L10 14 L10 22 Z M12 22 L12 14 L16 14 L16 22 Z'
      },
      // The pictorial series will repeat the shape proportional to `y`
      data: [
        { name: 'Agriculture', y: 30 },
        { name: 'IT', y: 50 },
        { name: 'Automobile', y: 20 },
        { name: 'Electronics', y: 40 }
      ],
      dataLabels: { enabled: true, format: '{point.name}: {point.y}M' }
    }]
  };



  // Variwide chart to show investment variance with variable column widths
  chartOptions4: Highcharts.Options = {
    chart: { type: 'variwide' },
    title: { text: 'Investment Variance - Variwide Chart' },
    xAxis: {
      categories: ['Agriculture', 'IT', 'Automobile', 'Electronics'],
      title: { text: 'Sectors' }
    },
    yAxis: { title: { text: 'Investment Amount (in millions)' } },
    series: [{
      type: 'variwide',
      data: [
        { name: 'Agriculture', y: 30, z: 10 },
        { name: 'IT', y: 50, z: 20 },
        { name: 'Automobile', y: 20, z: 15 },
        { name: 'Electronics', y: 40, z: 25 }
      ],
      dataLabels: { enabled: true, format: '{point.name}: {point.y}M' }
    }]
  };

  chartOptions5: Highcharts.Options = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 60,
        viewDistance: 25
      }
    },
    title: { text: '3D Investment by Sector - Column Chart' },
    xAxis: {
      categories: ['Agriculture', 'IT', 'Automobile', 'Electronics'],
      title: { text: 'Sectors' }
    },
    yAxis: { title: { text: 'Investment Amount (in millions)' } },
    plotOptions: {
      column: { depth: 40 }
    },
    series: [
      { type: 'column', name: 'Bank A', data: [12, 25, 18, 30] },
      { type: 'column', name: 'Bank B', data: [20, 18, 22, 28] },
      { type: 'column', name: 'Bank C', data: [15, 30, 12, 25] }
    ]
  };


  /* ***********************************************************************************
  // // 3D scatter chart used as bubble visualization (x=sector, y=investor group, z=size)
  // chartOptionsScattered6: Highcharts.Options = {
  //   chart: {
  //     type: 'scatter3d',
  //     options3d: {
  //       enabled: true,
  //       alpha: 15,
  //       beta: 15,
  //       depth: 250,
  //       viewDistance: 25
  //     }
  //   },
  //   title: { text: '3D Investment Bubbles (Sector vs Investor)' },
  //   xAxis: {
  //     // map sectors to numeric x positions
  //     categories: ['Agriculture', 'IT', 'Automobile', 'Electronics'] as any,
  //     title: { text: 'Sectors' }
  //   },
  //   yAxis: {
  //     // map investor groups to numeric y positions
  //     categories: ['Bank A', 'Bank B', 'Bank C'] as any,
  //     title: { text: 'Investor Groups' }
  //   },
  //   zAxis: { title: { text: 'Investment Size (M)' } },
  //   tooltip: {
  //     pointFormat: '{point.name}: {point.z}M'
  //   },
  //   series: [{
  //     // @ts-ignore: scatter3d typings may be missing
  //     type: 'scatter3d',
  //     name: 'Investments',
  //     // data: [x, y, z, name]
  //     data: [
  //       { x: 0, y: 0, z: 30, name: 'Bank A - Agriculture', marker: { radius: 8 } },
  //       { x: 1, y: 0, z: 50, name: 'Bank A - IT', marker: { radius: 12 } },
  //       { x: 2, y: 0, z: 18, name: 'Bank A - Automobile', marker: { radius: 6 } },
  //       { x: 3, y: 0, z: 28, name: 'Bank A - Electronics', marker: { radius: 10 } },

  //       { x: 0, y: 1, z: 20, name: 'Bank B - Agriculture', marker: { radius: 7 } },
  //       { x: 1, y: 1, z: 18, name: 'Bank B - IT', marker: { radius: 6 } },
  //       { x: 2, y: 1, z: 22, name: 'Bank B - Automobile', marker: { radius: 7 } },
  //       { x: 3, y: 1, z: 30, name: 'Bank B - Electronics', marker: { radius: 11 } },

  //       { x: 0, y: 2, z: 15, name: 'Bank C - Agriculture', marker: { radius: 6 } },
  //       { x: 1, y: 2, z: 30, name: 'Bank C - IT', marker: { radius: 12 } },
  //       { x: 2, y: 2, z: 12, name: 'Bank C - Automobile', marker: { radius: 5 } },
  //       { x: 3, y: 2, z: 25, name: 'Bank C - Electronics', marker: { radius: 9 } }
  //     ],
  //     dataLabels: { enabled: false }
  //   }]
  // };
  ************************************************************************************ */

  

// chartOptions6: Highcharts.Options = {
//   chart: {
//     type: 'columnpyramid',
//     height: 300
//   },
//   title: { text: 'Sector-wise Investment (₹ Crores)' },
//   subtitle: { text: 'Aggregated across all investors and partner banks' },

//   xAxis: {
//     categories: [
//       'Agriculture',
//       'Automobile',
//       'Electronics',
//       'Energy',
//       'Healthcare',
//       'Technology',
//       'Real Estate'
//     ],
//     title: { text: 'Sectors' }
//   },

//   yAxis: {
//     min: 0,
//     title: { text: 'Investment (₹ Cr)' },
//     allowDecimals: false
//   },

//   tooltip: {
//     pointFormat:
//       '<b>{series.name}</b><br/>' +
//       'Sector: <b>{point.category}</b><br/>' +
//       'Investment: <b>{point.y:.0f} Cr</b>'
//   },

//   credits: { enabled: false },

//   plotOptions: {
//     columnpyramid: {
//       borderWidth: 0,
//       dataLabels: {
//         enabled: true,
//         format: '{y} Cr',
//         style: { textOutline: 'none' }
//       }
//     }
//   },

//   // Example realistic distribution; adjust as needed
//   series: [
//     {
//       type: 'columnpyramid',
//       name: 'Total Investment',
//       color: '#4F46E5',
//       data: [
//         120, // Agriculture
//         180, // Automobile
//         95,  // Electronics
//         210, // Energy
//         160, // Healthcare
//         250, // Technology
//         300  // Real Estate
//       ]
//     }
//   ]
// };


/* ***********************************************************************************
 chartOptions6: Highcharts.Options = { 
  title: {
    text: 'My Chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5]
  }]
 }; 

 ************************************************************************************ */

  chartOptions6: Highcharts.Options = {
    chart: {
      // Just change this to: 'line', 'column', 'bar', 'spline', 'areaspline', etc.
      type: 'scatter'
    },
    title: {
      text: 'Investment Distribution - Scatter Chart'
    },
    xAxis: {
      title: { text: 'Sectors' },
      categories: ['Agriculture', 'IT', 'Automobile', 'Electronics']
    },
    yAxis: {
      title: { text: 'Investment Amount (in millions)' }
    },
    series: [{
      type: 'scatter', // <-- Change this to any core type

      marker: {
        radius: 15,
        fillColor: 'green',                   // default size
        states: {
          hover: {
            enabled: true,
            radius: 19,               // <-- grow on hover
            lineWidthPlus: 0         // keep outline from getting thicker (optional)
          }
        }
      },
      states: {
        hover: {
          enabled: true
        }
      },

      name: 'Investments',
      data: [
        { name: 'Agriculture', y: 30 },
        { name: 'IT', y: 50 },
        { name: 'Automobile', y: 20 },
        { name: 'Electronics', y: 40 }
      ]
    }]
  };

}
