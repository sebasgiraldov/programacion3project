import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-inmuebles',
  templateUrl: './grafica-inmuebles.component.html',
  styleUrls: ['./grafica-inmuebles.component.css']
})
export class GraficaInmueblesComponent implements OnInit {
  data: any[];
  constructor(private pdtService: ProductService, private route: ActivatedRoute) { 
    
  }
productList: ProductModel[]=[];


  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts(): void {
    this.pdtService.getAllProducts().subscribe(p => {
      this.productList = p;
      console.log(this.productList);
    });
  }

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
  public barChartLabels: Label[] = ['Casa', 'Apartamento', 'Finca'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80], label: 'alquilados' },
    { data: [28, 48, 40], label: 'comprados' }
     


  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
  public RecorrerArray(){
    
  }
  

}
