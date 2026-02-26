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
  
  // displays volume with area size, and distribution with color intensity
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
    name: 'Domestic Investment',
    data: [
      { name: 'Agriculture', y: 30 },
      { name: 'IT', y: 50 },
      { name: 'Automobile', y: 20 },
      { name: 'Electronics', y: 40 }
    ]
  },
  {
    type: 'area',
    name: 'Foreign Investment',
    data: [
      { name: 'Agriculture', y: 15 },
      { name: 'IT', y: 35 },
      { name: 'Automobile', y: 25 },
      { name: 'Electronics', y: 30 }
    ]
  }]
 }; 

  // A heatmap is a type of data visualization that represents values using colors 
  // instead of just numbers. It’s essentially a grid (like a table), 
  // where each cell’s color intensity corresponds to the magnitude of the value it represents.
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
        [0, 0, 80],[0, 1, 15],[0, 2, 20],[0, 3, 25],
        [1, 0, 30],[1, 1, 35],[1, 2, 40],[1, 3, 45],
        [2, 0, 50],[2, 1, 55],[2, 2, 60],[2, 3, 65],
        [3, 0, 70],[3, 1, 75],[3, 2, 80],[3, 3, 85]
      ],
      dataLabels: { enabled: true, color: '#000000' }
    }]
  };



// A donut chart is a variation of a pie chart where data proportions are shown as 
// slices of a circle with a hollow center, making it easy to compare 
// categories while also allowing space in the middle for labels or additional context.
chartOptions3: Highcharts.Options = {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Sector Representation - Donut Chart Race'
  },
  subtitle: {
    text: 'comparison of investment magnitude per sector'
  },
  plotOptions: {
    pie: {
      innerSize: '50%', // creates the donut hole
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y}M'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Investments',
    data: [
      { name: 'Agriculture', y: 30 },
      { name: 'IT', y: 50 },
      { name: 'Automobile', y: 20 },
      { name: 'Electronics', y: 40 }
    ]
  }]
};



  // Variwide chart to show investment variance with variable column widths
  // we can vary width (z) to represent another dimension of data, such as market share or growth rate, 
  // while height (y) represents the investment amount. This allows us to visualize both the magnitude and the relative importance of each sector in a single chart.
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
      color: '#d48ab8f6', // single color applied to all columns
      data: [
        { name: 'Agriculture', y: 30, z: 10 },
        { name: 'IT', y: 50, z: 20 },
        { name: 'Automobile', y: 20, z: 15 },
        { name: 'Electronics', y: 40, z: 25 }
      ],
      dataLabels: { enabled: true, format: '{point.name}: {point.y}M' }
    }]
  };



// A column comparison chart is a bar-style visualization where multiple series of data 
// are displayed side by side across categories, making it easy to compare values 
// (like investments) across different groups or sectors at a glance

chartOptions5: Highcharts.Options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Sectoral Investment - Column Comparison'
  },
  xAxis: {
    categories: ['Agriculture', 'IT', 'Automobile', 'Electronics'],
    title: { text: 'Sectors' }
  },
  yAxis: {
    min: 0,
    title: { text: 'Investment Amount (in millions)' }
  },
  plotOptions: {
    column: {
      grouping: true,   // ensures side-by-side comparison
      shadow: false,
      borderWidth: 0
    }
  },
  series: [
    { type: 'column', name: 'Bank A', data: [12, 25, 18, 30] },
    { type: 'column', name: 'Bank B', data: [20, 18, 22, 28] },
    { type: 'column', name: 'Bank C', data: [15, 30, 12, 25] }
  ]
};


// Scatter charts display data as points on a Cartesian plane, where each point represents the values of two variables.
//  Scatter charts are often used to visualize the relationships between data 
// in two dimensions
chartOptions6: Highcharts.Options = {
  chart: {
    type: 'scatter'
  },
  title: {
    text: 'Investment Distribution - Scatter Chart'
  },
  xAxis: {
    title: { text: 'Sectors' },
    categories: [
      'Agriculture', 'IT', 'Automobile', 'Electronics',
      'Healthcare', 'Energy', 'Real Estate', 'Retail',
      'Education', 'Telecom'
    ]
  },
  yAxis: {
    title: { text: 'Investment Amount (in millions)' }
  },
  series: [
    {
      type: 'scatter',
      name: 'Bank A',
      color: '#1f77b4',
      marker: {
        radius: 3,
        states: { hover: { enabled: true, radius: 5, lineWidthPlus: 0 } }
      },
      data: [
        { name: 'Agriculture', y: 30 },
        { name: 'IT', y: 50 },
        { name: 'Automobile', y: 20 },
        { name: 'Electronics', y: 40 },
        { name: 'Healthcare', y: 60 },
        { name: 'Energy', y: 45 },
        { name: 'Real Estate', y: 70 },
        { name: 'Retail', y: 25 },
        { name: 'Education', y: 55 },
        { name: 'Telecom', y: 35 }
      ]
    },
    {
      type: 'scatter',
      name: 'Bank B',
      color: '#ff7f0e',
      marker: {
        radius: 3,
        states: { hover: { enabled: true, radius: 5, lineWidthPlus: 0 } }
      },
      data: [
        { name: 'Agriculture', y: 40 },
        { name: 'IT', y: 35 },
        { name: 'Automobile', y: 30 },
        { name: 'Electronics', y: 50 },
        { name: 'Healthcare', y: 55 },
        { name: 'Energy', y: 60 },
        { name: 'Real Estate', y: 65 },
        { name: 'Retail', y: 30 },
        { name: 'Education', y: 45 },
        { name: 'Telecom', y: 50 }
      ]
    },
    {
      type: 'scatter',
      name: 'Bank C',
      color: '#2ca02c',
      marker: {
        radius: 3,
        states: { hover: { enabled: true, radius: 5, lineWidthPlus: 0 } }
      },
      data: [
        { name: 'Agriculture', y: 25 },
        { name: 'IT', y: 60 },
        { name: 'Automobile', y: 40 },
        { name: 'Electronics', y: 35 },
        { name: 'Healthcare', y: 50 },
        { name: 'Energy', y: 70 },
        { name: 'Real Estate', y: 55 },
        { name: 'Retail', y: 20 },
        { name: 'Education', y: 65 },
        { name: 'Telecom', y: 45 }
      ]
    }
  ]
};

}
