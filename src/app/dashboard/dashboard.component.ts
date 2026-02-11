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
    text: 'My Chart'
  },
  series: [{
    type: 'line',
    data: [1, 2, 3, 4, 5]
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
