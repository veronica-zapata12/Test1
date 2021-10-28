import { Component, OnDestroy, OnInit } from '@angular/core';
import { RespuestasProcastincacion } from 'src/app/shared/modelos/respuestasProcastinacion';
import { ExcelService } from 'src/app/shared/servicios/excel.service';
import { OrdenamientoService } from 'src/app/shared/servicios/ordenamiento.service';
import { ReporteService } from 'src/app/shared/servicios/reporte.service';

@Component({
  selector: 'app-reporte-procastinacion',
  templateUrl: './reporte-procastinacion.component.html',
  styleUrls: ['./reporte-procastinacion.component.sass']
})
export class ReporteProcastinacionComponent implements OnInit,OnDestroy {
/**
    * Listado de respuestas
    */
 public respuestas: RespuestasProcastincacion[];
 copia = [];
 public respuestasCopiar = [];
resultado:any
prueba=[];

 constructor(private reporteService: ReporteService,private ordenamientoService: OrdenamientoService,
   private excelervice: ExcelService) { }
   ngOnDestroy() {
    this.resultado.unsubscribe();
  }

 ngOnInit() {
  
   this.resultado=this.reporteService.obtenerTodosProcastinacionTest().subscribe(respuestas => {
    this.respuestas = respuestas;
     respuestas.forEach(row => {
       this.respuestasCopiar.push(row);
     });  
     
   });
 
  
   
 
 }

 descargar() {   
  this.respuestasCopiar.forEach(row => {
  let copia1 = {
    fecha: "",
    nombre: "",
    documento: "",
    programa:"",
    genero: "",
    item1	:0	,
    item2	:0	,
    item3	:0	,
    item4	:0	,
    item5	:0	,
    item6	:0	,
    item7	:0	,
    item8	:0	,
    item9	:0	,
    item10	:0	,
    item11	:0	,
    item12	:0	,
    item13	:0	,
    item14	:0	,
    item15	:0	,
    item16	:0	,
    item17	:0	,
    item18	:0	,
    item19	:0	,
    item20	:0	,
    item21	:0	,
    item22	:0	,
    item23	:0  ,	
    item24	:0  ,
    item25	:0  

  }
  

    copia1.fecha = row.fecha;
    copia1.nombre = row.datosPersonales.nombre;
    copia1.documento = row.datosPersonales.documento;
    copia1.programa=row.datosPersonales.programa;
    copia1.genero =row.datosPersonales.genero;
    copia1.item1 = row.respuestas[0];
     copia1.item2 = row.respuestas[1];
     copia1.item3 = row.respuestas[2];
     copia1.item4 = row.respuestas[3];
     copia1.item5 = row.respuestas[4];
     copia1.item6 = row.respuestas[5];
     copia1.item7 = row.respuestas[6];
     copia1.item8 = row.respuestas[7];
     copia1.item9 = row.respuestas[8];
     copia1.item10 = row.respuestas[9];
     copia1.item11 = row.respuestas[10];
     copia1.item12 = row.respuestas[11];
     copia1.item13 = row.respuestas[12];
     copia1.item14 = row.respuestas[13];
     copia1.item15 = row.respuestas[14];
     copia1.item16 = row.respuestas[15];
     copia1.item17 = row.respuestas[16];
     copia1.item18 = row.respuestas[17];
     copia1.item19 = row.respuestas[18];
     copia1.item20 = row.respuestas[19];
     copia1.item21 = row.respuestas[20];
     copia1.item22 = row.respuestas[21];
     copia1.item23 = row.respuestas[22];
     copia1.item24 = row.respuestas[23];
     copia1.item25 = row.respuestas[24];


    this.copia.push(copia1)
   
  });
  
   this.copia.sort(this.ordenamientoService.ascendentemente('fecha'));

  this.excelervice.exportAsExcelFile(this.copia, 'respuestas Test Procastinacion');
  
  this.copia=[];
  
}



}
