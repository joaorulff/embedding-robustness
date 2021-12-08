import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-chart',
  templateUrl: './mock-chart.component.html',
  styleUrls: ['./mock-chart.component.scss']
})
export class MockChartComponent implements OnInit, AfterViewInit {

  @Input('dataset') dataset!: string;
  @Input('perturbation') perturbation!: string;
  @Input('metric') metric!: string;

  public chartsource: string = '../../../assets/placeholderimg.png'

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void{

    const chartpath: string = `../../../assets/charts/${this.dataset}_${this.perturbation}_${this.metric}.png`
    this.chartsource = chartpath;
  
  }

}
