import { Component, Input, OnInit } from '@angular/core'
import * as Highcharts from 'highcharts'
import { ExType, getSiAsString, SlopeIntercept } from 'src/app/functions'

@Component({
  selector: 'app-CartesianGraph',
  templateUrl: './CartesianGraph.component.html',
  styleUrls: ['./CartesianGraph.component.scss'],
})
export class CartesianGraphComponent implements OnInit {
  _dataset = [
    [-100, -100],
    [2, 2],
    [100, 100],
  ]
  _si: SlopeIntercept = { m: 0, b: 0, rise: 0, run: 0 }
  _title = ''
  get dataset(): any {
    return this._dataset
  }
  get si(): any {
    return this._si
  }
  get title(): any {
    return this._title
  }
  @Input() set dataset(d: {
    p: any
    a: any
    si: SlopeIntercept
    type: ExType
    title: string
  }) {
    this.setDs(d.p, d.a, d.si, d.title).then((ds: any) => {
      this._dataset = ds
      this.setChartOptions(d.type)
    })
  }

  setDs(p: any, a: any, si: any, title: string): Promise<any> {
    this._title = title
    this._si = si
    let ds: any = []
    return new Promise((resolve) => {
      ds.push([a.low.x, a.low.y])
      ds.push([p.point1.x, p.point1.y])
      ds.push([p.point2.x, p.point2.y])
      ds.push([p.point3.x, p.point3.y])
      ds.push([a.high.x, a.high.y])

      resolve(ds)
    })
  }

  getTrendLine(data: any) {
    const n = data.length

    let sumX = 0,
      sumY = 0,
      sumXY = 0,
      sumX2 = 0

    // Calculate the sums needed for linear regression
    for (let i = 0; i < n; i++) {
      const [x, y] = data[i]
      sumX += x
      sumY += y
      sumXY += x * y
      sumX2 += x ** 2
    }

    // Calculate the slope of the trend line
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2)

    // Calculate the intercept of the trend line
    const intercept = (sumY - slope * sumX) / n

    const trendline = [] // Array to store the trend line data points

    // Find the minimum and maximum x-values from the scatter plot data
    const minX = -20
    const maxX = 20

    // Calculate the corresponding y-values for the trend line using the slope
    // and intercept
    trendline.push([minX, minX * slope + intercept])
    trendline.push([maxX, maxX * slope + intercept])

    return trendline
  }

  setChartOptions(type: ExType = ExType.e) {
    this.chartOptions = {}
    this.chartOptions = {
      tooltip: { enabled: false },
      legend: { enabled: false },
      title: {
        text: this._title.length < 1 ? getSiAsString(this._si, type) : 'Graph',
      },
      xAxis: {
        type: 'linear',
        tickInterval: 1,
        title: {
          text: '<span style="font-size:x-large;font-weight:1000"></span>',
          useHTML: true,
        },
        offset: -210,
        labels: {
          distance: 0,
          step: 5,
        },
        min: -10,
        max: 10,
        gridLineWidth: 0,
        lineWidth: 1,
        plotLines: [
          {
            color: '#999999',
            width: 1,
            value: -20,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -19,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -18,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -17,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -16,
          },
          {
            color: '#999999',
            width: 1,
            value: -15,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -14,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -13,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -12,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -11,
          },
          {
            color: '#999999',
            width: 1,
            value: -10,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -9,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -8,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -7,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -6,
          },
          {
            color: '#999999',
            width: 1,
            value: -5,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -4,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -3,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -2,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -1,
          },
          {
            color: '#000000',
            width: 1,
            value: 0,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 1,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 2,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 3,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 4,
          },
          {
            color: '#999999',
            width: 1,
            value: 5,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 6,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 7,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 8,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 9,
          },
          {
            color: '#999999',
            width: 1,
            value: 10,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 11,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 12,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 13,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 14,
          },
          {
            color: '#999999',
            width: 1,
            value: 15,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 16,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 17,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 18,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 19,
          },
          {
            color: '#999999',
            width: 1,
            value: 20,
          },
        ],
      },
      yAxis: {
        type: 'linear',
        tickInterval: 1,
        title: {
          text: '<span style="font-size:x-large;font-weight:1000"></span>',
          rotation: 0,
          useHTML: true,
        },
        offset: -225,
        labels: {
          distance: 0,
          step: 5,
        },
        min: -10,
        max: 10,
        gridLineWidth: 0,
        lineWidth: 1,
        plotLines: [
          {
            color: '#999999',
            width: 1,
            value: -20,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -19,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -18,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -17,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -16,
          },
          {
            color: '#999999',
            width: 1,
            value: -15,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -14,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -13,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -12,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -11,
          },
          {
            color: '#999999',
            width: 1,
            value: -10,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -9,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -8,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -7,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -6,
          },
          {
            color: '#999999',
            width: 1,
            value: -5,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -4,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -3,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -2,
          },
          {
            color: '#dddddd',
            width: 1,
            value: -1,
          },
          {
            color: '#000000',
            width: 1,
            value: 0,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 1,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 2,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 3,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 4,
          },
          {
            color: '#999999',
            width: 1,
            value: 5,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 6,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 7,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 8,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 9,
          },
          {
            color: '#999999',
            width: 1,
            value: 10,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 11,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 12,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 13,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 14,
          },
          {
            color: '#999999',
            width: 1,
            value: 15,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 16,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 17,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 18,
          },
          {
            color: '#dddddd',
            width: 1,
            value: 19,
          },
          {
            color: '#999999',
            width: 1,
            value: 20,
          },
        ],
      },
      series: [
        {
          type: 'area',
          threshold:
            type === ExType.g
              ? Infinity
              : type === ExType.ge
              ? Infinity
              : type === ExType.l
              ? -Infinity
              : type === ExType.le
              ? -Infinity
              : 0,
          color: type !== ExType.e ? 'green' : 'transparent',
          data: this.dataset,
          marker: {
            enabled: false,
          },
          states: {
            hover: {
              enabled:false
            },
          },
          enableMouseTracking: false
        },
        {
          type: 'line',
          name: 'Trend Line',
          data: this.getTrendLine(this.dataset),
          lineWidth: 4,
          color: '#090088',
          dashStyle:
            type === ExType.l ? 'Dash' : type === ExType.g ? 'Dash' : 'Solid',
          marker: {
            enabled: false,
          },
          states: {
            hover: {
              enabled:false
            },
          },
          enableMouseTracking: false,
        },
        // {
        //   type: 'scatter',
        //   name: 'Observations',
        //   data: this.dataset,
        //   marker: {
        //     radius: 4,
        //   },
        // },
      ],
    }
  }

  Highcharts: typeof Highcharts = Highcharts // required
  chartConstructor: string = 'chart' // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {} // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {} // optional function, defaults to null
  updateFlag: boolean = false // optional boolean
  oneToOneFlag: boolean = true // optional boolean, defaults to false
  runOutsideAngular: boolean = false // optional boolean, defaults to false

  constructor() {}

  ngOnInit() {}
}
