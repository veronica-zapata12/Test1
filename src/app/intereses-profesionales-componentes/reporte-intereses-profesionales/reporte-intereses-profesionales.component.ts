import { Component, OnInit } from '@angular/core';
import { RespuestasInteresesProfesionales } from 'src/app/shared/modelos/respuestasInteresesProfesionales';
import { ExcelService } from 'src/app/shared/servicios/excel.service';
import { ReporteService } from 'src/app/shared/servicios/reporte.service';

@Component({
  selector: 'app-reporte-intereses-profesionales',
  templateUrl: './reporte-intereses-profesionales.component.html',
  styleUrls: ['./reporte-intereses-profesionales.component.sass']
})
export class ReporteInteresesProfesionalesComponent implements OnInit {

   /**
     * Listado de respuestas
     */
    public respuestas: RespuestasInteresesProfesionales[];
    copia = [];
    public respuestasCopiar = [];
    resultado:any
  
    constructor(private reporteService: ReporteService,
      private excelervice: ExcelService) { }
      ngOnDestroy() {
        this.resultado.unsubscribe();
      }
    ngOnInit() {
  
      this.resultado=this.reporteService.obtenerTodosInteresesProfesionalesTest().subscribe(respuestas => {
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
          item1: 0,
          item2: 0,
          item3: 0,
          item4: 0,
          item5: 0,
          item6: 0,
          item7: 0,
          item8: 0,
          item9: 0,
          item10: 0,
          item11: 0,
          item12: 0,
          item13: 0,
          item14: 0,
          item15: 0,
          item16: 0,
          item17: 0,
          item18: 0,
          item19: 0,
          item20: 0,
          item21: 0,
          item22: 0,
          item23: 0,
          item24: 0,
          item25: 0,
          item26: 0,
          item27: 0,
          item28: 0,
          item29: 0,
          item30: 0,
          item31: 0,
          item32: 0,
          item33: 0,
          item34: 0,
          item35: 0,
          item36: 0,
          item37: 0,
          item38: 0,
          item39: 0,
          item40: 0,
          item41: 0,
          item42: 0,
          item43: 0,
          item44: 0,
          item45: 0,
          item46: 0,
          item47: 0,
          item48: 0,
          item49: 0,
          item50: 0,
          item51: 0,
          item52: 0,
          item53: 0,
          item54: 0,
          item55: 0,
          item56: 0,
          item57: 0,
          item58: 0,
          item59: 0,
          item60: 0,
          item61: 0,
          item62: 0,
          item63: 0,
          item64: 0,
          item65: 0,
          item66: 0,
          item67: 0,
          item68: 0,
          item69: 0,
          item70: 0,
          item71:0
        }
  
  
        copia1.fecha = row.fecha;
        copia1.nombre = row.datosPersonales.nombre;
        copia1.documento = row.datosPersonales.documento;
        copia1.programa=row.datosPersonales.programa;
        copia1.genero = row.datosPersonales.genero;
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
        copia1.item26 = row.respuestas[25];
        copia1.item27 = row.respuestas[26];
        copia1.item28 = row.respuestas[27];
        copia1.item29 = row.respuestas[28];
        copia1.item30 = row.respuestas[29];
        copia1.item31 = row.respuestas[30];
        copia1.item32 = row.respuestas[31];
        copia1.item33 = row.respuestas[32];
        copia1.item34 = row.respuestas[33];
        copia1.item35 = row.respuestas[34];
        copia1.item36 = row.respuestas[35];
        copia1.item37 = row.respuestas[36];
        copia1.item38 = row.respuestas[37];
        copia1.item39 = row.respuestas[38];
        copia1.item40 = row.respuestas[39];
        copia1.item41 = row.respuestas[40];
        copia1.item42 = row.respuestas[41];
        copia1.item43 = row.respuestas[42];
        copia1.item44 = row.respuestas[43];
        copia1.item45 = row.respuestas[44];
        copia1.item46 = row.respuestas[45];
        copia1.item47 = row.respuestas[46];
        copia1.item48 = row.respuestas[47];
        copia1.item49 = row.respuestas[48];
        copia1.item50 = row.respuestas[49];
        copia1.item51 = row.respuestas[50];
        copia1.item52 = row.respuestas[51];
        copia1.item53 = row.respuestas[52];
        copia1.item54 = row.respuestas[53];
        copia1.item55 = row.respuestas[54];
        copia1.item56 = row.respuestas[55];
        copia1.item57 = row.respuestas[56];
        copia1.item58 = row.respuestas[57];
        copia1.item59 = row.respuestas[58];
        copia1.item60 = row.respuestas[59];
        copia1.item61 = row.respuestas[60];
        copia1.item62 = row.respuestas[61];
        copia1.item63 = row.respuestas[62];
        copia1.item64 = row.respuestas[63];
        copia1.item65 = row.respuestas[64];
        copia1.item66 = row.respuestas[65];
        copia1.item67 = row.respuestas[66];
        copia1.item68 = row.respuestas[67];
        copia1.item69 = row.respuestas[68];
        copia1.item70 = row.respuestas[69];
        copia1.item71 = row.respuestas[70];

  
        this.copia.push(copia1)
  
      });
      
      this.excelervice.exportAsExcelFile(this.copia, 'respuestas test intereses profesionales');
      this.copia = [];
    }
  
  
  }
  