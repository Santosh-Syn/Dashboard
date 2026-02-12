import { Component } from '@angular/core';
import { HighchartsChartComponent, providePartialHighcharts } from 'highcharts-angular';

import heatmap from 'highcharts/modules/heatmap';


@Component({
  selector: 'app-dashboard',
  imports: [HighchartsChartComponent],
  providers: [
    providePartialHighcharts({
      modules: () => {
        return [
          import('highcharts/esm/modules/heatmap')
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
  title: {
    text: 'My Chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5]
  }]
 }; 

 chartOptions4: Highcharts.Options = { 
  title: {
    text: 'My Chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5]
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
