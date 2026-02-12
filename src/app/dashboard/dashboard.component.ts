import { Component } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-dashboard',
  imports: [HighchartsChartComponent],
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
    text: 'My Chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5]
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
