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
          import('highcharts/esm/modules/variwide')
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
    title: {
      text: 'My Chart'
    },
    series: [{
      type: 'line',
      data: [1, 2, 3, 4, 5]
    }]
  }; 



 chartOptions6: Highcharts.Options = { 
  title: {
    text: 'My Chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5]
  }]
 }; 

}
