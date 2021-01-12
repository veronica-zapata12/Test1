import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/shared/servicios/reporte.service';
import { OrdenamientoService } from 'src/app/shared/servicios/ordenamiento.service';
import { ExcelService } from 'src/app/shared/servicios/excel.service';
import { Respuestas } from 'src/app/shared/modelos/respuestas';

@Component({
  selector: 'app-reporte-personalidad',
  templateUrl: './reporte-personalidad.component.html',
  styleUrls: ['./reporte-personalidad.component.sass']
})
export class ReportePersonalidadComponent implements OnInit {
  /**
     * Listado de respuestas
     */
  public respuestas: Respuestas[];
  copia = [];
  public respuestasCopiar = [];

  constructor(private reporteService: ReporteService, private ordenamiento: OrdenamientoService,
    private excelervice: ExcelService) { }

  ngOnInit() {

    this.reporteService.obtenerTodos().subscribe(respuestas => {
      this.respuestas = respuestas;
      this.respuestas.sort(this.ordenamiento.ascendentemente('orden'));

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
        item71: 0,
        item72: 0,
        item73: 0,
        item74: 0,
        item75: 0,
        item76: 0,
        item77: 0,
        item78: 0,
        item79: 0,
        item80: 0,
        item81: 0,
        item82: 0,
        item83: 0,
        item84: 0,
        item85: 0,
        item86: 0,
        item87: 0,
        item88: 0,
        item89: 0,
        item90: 0,
        item91: 0,
        item92: 0,
        item93: 0,
        item94: 0,
        item95: 0,
        item96: 0,
        item97: 0,
        item98: 0,
        item99: 0,
        item100: 0,
        item101: 0,
        item102: 0,
        item103: 0,
        item104: 0,
        item105: 0,
        item106: 0,
        item107: 0,
        item108: 0,
        item109: 0,
        item110: 0,
        item111: 0,
        item112: 0,
        item113: 0,
        item114: 0,
        item115: 0,
        item116: 0,
        item117: 0,
        item118: 0,
        item119: 0,
        item120: 0,
        item121: 0,
        item122: 0,
        item123: 0,
        item124: 0,
        item125: 0,
        item126: 0,
        item127: 0,
        item128: 0,
        item129: 0,
        item130: 0,
        item131: 0,
        item132: 0,
        item133: 0,
        item134: 0,
        item135: 0,
        item136: 0,
        item137: 0,
        item138: 0,
        item139: 0,
        item140: 0,
        item141: 0,
        item142: 0,
        item143: 0,
        item144: 0,
        item145: 0,
        item146: 0,
        item147: 0,
        item148: 0,
        item149: 0,
        item150: 0,
        item151: 0,
        item152: 0,
        item153: 0,
        item154: 0,
        item155: 0,
        item156: 0,
        item157: 0,
        item158: 0,
        item159: 0,
        item160: 0,
        item161: 0,
        item162: 0,
        item163: 0,
        item164: 0,
        item165: 0,
        item166: 0,
        item167: 0,
        item168: 0,
        item169: 0,
        item170: 0,
        item171: 0,
        item172: 0,
        item173: 0,
        item174: 0,
        item175: 0,
        item176: 0,
        item177: 0,
        item178: 0,
        item179: 0,
        item180: 0,
        item181: 0,
        item182: 0,
        item183: 0,
        item184: 0,
        item185: 0,
        PE_A: 0,
        PE_B: 0,
        PE_C: 0,
        PE_E: 0,
        PE_F: 0,
        PE_G: 0,
        PE_H: 0,
        PE_I: 0,
        PE_L: 0,
        PE_M: 0,
        PE_N: 0,
        PE_O: 0,
        PE_Q1: 0,
        PE_Q2: 0,
        PE_Q3: 0,
        PE_Q4: 0,
        PE_MI: 0,
        PE_IN: 0,
        PE_QA: 0,
        PD_A: 0,
        PD_B: 0,
        PD_C: 0,
        PD_E: 0,
        PD_F: 0,
        PD_G: 0,
        PD_H: 0,
        PD_I: 0,
        PD_L: 0,
        PD_M: 0,
        PD_N: 0,
        PD_O: 0,
        PD_Q1: 0,
        PD_Q2: 0,
        PD_Q3: 0,
        PD_Q4: 0,
        PD_MI: 0,
        PD_NI: 0,
        PD_QA: 0
      }


      copia1.fecha = row.fecha;
      copia1.nombre = row.datosPersonales.nombre;
      copia1.documento = row.datosPersonales.documento;
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
      copia1.item72 = row.respuestas[71];
      copia1.item73 = row.respuestas[72];
      copia1.item74 = row.respuestas[73];
      copia1.item75 = row.respuestas[74];
      copia1.item76 = row.respuestas[75];
      copia1.item77 = row.respuestas[76];
      copia1.item78 = row.respuestas[77];
      copia1.item79 = row.respuestas[78];
      copia1.item80 = row.respuestas[79];
      copia1.item81 = row.respuestas[80];
      copia1.item82 = row.respuestas[81];
      copia1.item83 = row.respuestas[82];
      copia1.item84 = row.respuestas[83];
      copia1.item85 = row.respuestas[84];
      copia1.item86 = row.respuestas[85];
      copia1.item87 = row.respuestas[86];
      copia1.item88 = row.respuestas[87];
      copia1.item89 = row.respuestas[88];
      copia1.item90 = row.respuestas[89];
      copia1.item91 = row.respuestas[90];
      copia1.item92 = row.respuestas[91];
      copia1.item93 = row.respuestas[92];
      copia1.item94 = row.respuestas[93];
      copia1.item95 = row.respuestas[94];
      copia1.item96 = row.respuestas[95];
      copia1.item97 = row.respuestas[96];
      copia1.item98 = row.respuestas[97];
      copia1.item99 = row.respuestas[98];
      copia1.item100 = row.respuestas[99];
      copia1.item101 = row.respuestas[100];
      copia1.item102 = row.respuestas[101];
      copia1.item103 = row.respuestas[102];
      copia1.item104 = row.respuestas[103];
      copia1.item105 = row.respuestas[104];
      copia1.item106 = row.respuestas[105];
      copia1.item107 = row.respuestas[106];
      copia1.item108 = row.respuestas[107];
      copia1.item109 = row.respuestas[108];
      copia1.item110 = row.respuestas[109];
      copia1.item111 = row.respuestas[110];
      copia1.item112 = row.respuestas[111];
      copia1.item113 = row.respuestas[112];
      copia1.item114 = row.respuestas[113];
      copia1.item115 = row.respuestas[114];
      copia1.item116 = row.respuestas[115];
      copia1.item117 = row.respuestas[116];
      copia1.item118 = row.respuestas[117];
      copia1.item119 = row.respuestas[118];
      copia1.item120 = row.respuestas[119];
      copia1.item121 = row.respuestas[120];
      copia1.item122 = row.respuestas[121];
      copia1.item123 = row.respuestas[122];
      copia1.item124 = row.respuestas[123];
      copia1.item125 = row.respuestas[124];
      copia1.item126 = row.respuestas[125];
      copia1.item127 = row.respuestas[126];
      copia1.item128 = row.respuestas[127];
      copia1.item129 = row.respuestas[128];
      copia1.item130 = row.respuestas[129];
      copia1.item131 = row.respuestas[130];
      copia1.item132 = row.respuestas[131];
      copia1.item133 = row.respuestas[132];
      copia1.item134 = row.respuestas[133];
      copia1.item135 = row.respuestas[134];
      copia1.item136 = row.respuestas[135];
      copia1.item137 = row.respuestas[136];
      copia1.item138 = row.respuestas[137];
      copia1.item139 = row.respuestas[138];
      copia1.item140 = row.respuestas[139];
      copia1.item141 = row.respuestas[140];
      copia1.item142 = row.respuestas[141];
      copia1.item143 = row.respuestas[142];
      copia1.item144 = row.respuestas[143];
      copia1.item145 = row.respuestas[144];
      copia1.item146 = row.respuestas[145];
      copia1.item147 = row.respuestas[146];
      copia1.item148 = row.respuestas[147];
      copia1.item149 = row.respuestas[148];
      copia1.item150 = row.respuestas[149];
      copia1.item151 = row.respuestas[150];
      copia1.item152 = row.respuestas[151];
      copia1.item153 = row.respuestas[152];
      copia1.item154 = row.respuestas[153];
      copia1.item155 = row.respuestas[154];
      copia1.item156 = row.respuestas[155];
      copia1.item157 = row.respuestas[156];
      copia1.item158 = row.respuestas[157];
      copia1.item159 = row.respuestas[158];
      copia1.item160 = row.respuestas[159];
      copia1.item161 = row.respuestas[160];
      copia1.item162 = row.respuestas[161];
      copia1.item163 = row.respuestas[162];
      copia1.item164 = row.respuestas[163];
      copia1.item165 = row.respuestas[164];
      copia1.item166 = row.respuestas[165];
      copia1.item167 = row.respuestas[166];
      copia1.item168 = row.respuestas[167];
      copia1.item169 = row.respuestas[168];
      copia1.item170 = row.respuestas[169];
      copia1.item171 = row.respuestas[170];
      copia1.item172 = row.respuestas[171];
      copia1.item173 = row.respuestas[172];
      copia1.item174 = row.respuestas[173];
      copia1.item175 = row.respuestas[174];
      copia1.item176 = row.respuestas[175];
      copia1.item177 = row.respuestas[176];
      copia1.item178 = row.respuestas[177];
      copia1.item179 = row.respuestas[178];
      copia1.item180 = row.respuestas[179];
      copia1.item181 = row.respuestas[180];
      copia1.item182 = row.respuestas[181];
      copia1.item183 = row.respuestas[182];
      copia1.item184 = row.respuestas[183];
      copia1.item185 = row.respuestas[184];

      copia1.PD_A = row.PD[0];
      copia1.PD_B = row.PD[1];
      copia1.PD_C = row.PD[2];
      copia1.PD_E = row.PD[3];
      copia1.PD_F = row.PD[4];
      copia1.PD_G = row.PD[5];
      copia1.PD_H = row.PD[6];
      copia1.PD_I = row.PD[7];
      copia1.PD_L = row.PD[8];
      copia1.PD_M = row.PD[9];
      copia1.PD_N = row.PD[10];
      copia1.PD_O = row.PD[11];
      copia1.PD_Q1 = row.PD[12];
      copia1.PD_Q2 = row.PD[13];
      copia1.PD_Q3 = row.PD[14];
      copia1.PD_Q4 = row.PD[15];
      copia1.PD_MI = row.PD[16];
      copia1.PD_NI = row.PD[17];
      copia1.PD_QA = row.PD[18];
      copia1.PE_A = row.PE[0];
      copia1.PE_B = row.PE[1];
      copia1.PE_C = row.PE[2];
      copia1.PE_E = row.PE[3];
      copia1.PE_F = row.PE[4];
      copia1.PE_G = row.PE[5];
      copia1.PE_H = row.PE[6];
      copia1.PE_I = row.PE[7];
      copia1.PE_L = row.PE[8];
      copia1.PE_M = row.PE[9];
      copia1.PE_N = row.PE[10];
      copia1.PE_O = row.PE[11];
      copia1.PE_Q1 = row.PE[12];
      copia1.PE_Q2 = row.PE[13];
      copia1.PE_Q3 = row.PE[14];
      copia1.PE_Q4 = row.PE[15];
      copia1.PE_MI = row.PE[16];
      copia1.PE_IN = row.PE[17];
      copia1.PE_QA = row.PE[18];



      this.copia.push(copia1)

    });
    console.log(this.copia);

    this.excelervice.exportAsExcelFile(this.copia, 'respuestas test personalidad');
    this.copia = [];
  }


}
