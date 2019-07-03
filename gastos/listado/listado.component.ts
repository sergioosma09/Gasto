import { Component, OnInit } from '@angular/core';
import { GastoService } from 'src/app/services/gasto.service';
import { IGasto } from 'src/app/models/igasto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  gastosList: Array<IGasto>;
  constructor(private gastoService: GastoService) { }

  ngOnInit() {
    this.getGastosList();
  }
  getGastosList(){
    this.gastoService.getGastosList().subscribe(data => {
      this.gastosList = data;
    })
  }
  deleteGasto(gasto){
    console.log(gasto);
    this.gastoService.deleteGasto(gasto.id).subscribe (data => {
      this.getGastosList();
    });
  }
}
