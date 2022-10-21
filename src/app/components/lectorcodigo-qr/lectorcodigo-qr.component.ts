import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import { BeepService } from 'src/app/services/Beep/beep.service';
import { SharedDataService } from 'src/app/services/utils/shared-data.service';
@Component({
  selector: 'app-lectorcodigo-qr',
  templateUrl: './lectorcodigo-qr.component.html',
  styleUrls: ['./lectorcodigo-qr.component.scss']
})
export class LectorcodigoQrComponent implements OnInit {
  
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.QR_CODE,
  ];


  qrResultString: string='-------';

  url;
  constructor(
    private SharedData: SharedDataService,
    private router: Router,
    private beepService: BeepService,
    private dialogRef: MatDialogRef<LectorcodigoQrComponent>
  ) { }

  ngOnInit(): void {
    this.leerData();
  }
  leerData(){
    this.SharedData.shared$.subscribe(result => {
      if(result && result?.type === 'string'){
        if(result?.value){
          this.url=result.value;
          let aux:string = this.url.toString();
           aux=aux.substring(aux.indexOf("org/")+4)
          this.url=aux;
          //console.log('url '+this.url)
      
          //console.log(aux);
        }
      }
      
    })
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    try{
      let object = JSON.parse(this.qrResultString)
      if(object.codAsiento && object.codFuncion){
        this.dialogRef.close(object)
      }else{
        this.closeDialog();
      }
    }catch{
        this.closeDialog();
    }
  }

  closeDialog(){
    this.dialogRef.close(0);
  }
}
