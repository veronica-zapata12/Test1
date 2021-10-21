import { Injectable } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PngFileService {

  constructor() { }
  public generar(contenido: any, nombreArchivo: string):any {
    htmlToImage.toBlob(contenido)
    .then(function (blob) {
       
        FileSaver.saveAs(blob!, `${nombreArchivo}.png`);

    })
    .then(()=>{
      
    });
}
}
