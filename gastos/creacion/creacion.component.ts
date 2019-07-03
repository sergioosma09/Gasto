import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { GastoService } from 'src/app/services/gasto.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {
 gastoForm: FormGroup;

  constructor(private fb:FormBuilder, private gastoService:GastoService) { }

  ngOnInit() {
    this.createGastoForm();
  }
  createGastoForm(){
    this.gastoForm = this.fb.group({
      nombre:['Ibra', Validators.required],
      cantidad: ['5', Validators.required],
      descripcion: ['desayuno', Validators.required],
      fecha: ['', Validators.required],
      beneficiario: ['cafeteria', Validators.required]
    });
  }
  createGasto(){
    let miGastoItem = eval(this.gastoForm.value);
    console.log(miGastoItem);
  miGastoItem.cantidad = Number(miGastoItem.cantidad);
    miGastoItem.fecha = new Date(miGastoItem.fecha);

    this.gastoService.createGastoItem(this.gastoForm.value).subscribe(dato => {
      console.log(dato);
    });
  }
}

