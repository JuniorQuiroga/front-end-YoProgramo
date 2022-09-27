import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  projectsList:any;

  constructor(private datosPortfolio:PortfolioService) { }


  ngOnInit(): void {
    this.datosPortfolio.obtainData().subscribe(data => 
    {
      this.projectsList = data.projects;
    });
  }

}
