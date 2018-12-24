import { HttpClient } from '@angular/common/http';

  import {
    Injectable
  } from '@angular/core';
  import {
    Router
  } from '@angular/router';
  import {
    Observable
  } from 'rxjs/Observable';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/catch';
  import {MatDialog} from '@angular/material';
  import {AlertDialogComponent} from '../../../../dialog/alert-dialog/alert-dialog.component';
  import {WebserModel} from '../../../../navigation/WebService'
  import { DatePipe } from '@angular/common';

    @Injectable()
  export class feeWebService {
    userSetdate: any;
    User: any;   
     
 
     BASE_URL = this.Model.Sevice.BASE_URL;
    FEE_TYPE_SAVE = this.Model.Sevice.FEE_TYPE_SAVE;
    FEE_TYPE_GET = this.Model.Sevice.FEE_TYPE_GET;
    FEE_TYPE_UPDATE = this.Model.Sevice.FEE_TYPE_UPDATE;
    FEE_SAVE = this.Model.Sevice.FEE_SAVE;
    FEE_GET = this.Model.Sevice.FEE_GET;
    FEE_UPDATE = this.Model.Sevice.FEE_UPDATE;

     constructor( private _http: HttpClient, private router: Router,public dialog: MatDialog
    ,private Model:WebserModel,private datePipe: DatePipe ) {
     }
     setTokken(token){
       sessionStorage.setItem('token',token);
     }
     get gettokken(){
       return sessionStorage.getItem('token')
     }
   alertDialog(message,state){

    let dialogRef = this.dialog.open(AlertDialogComponent, {
      height: '350px',
      width: '350px',
      data: { message:message  }
   });
  dialogRef.afterClosed().subscribe(result => {
     this.router.navigate([state])
    });
  }
                    getfeeType(): Observable < any > {
                     var data= {tokenId:this.gettokken}
 
                      return this._http.post(this.BASE_URL + this.FEE_TYPE_GET, data)
                   .map(res => < any > res)
                   .catch(this.handleError);
                  }
                  SavefeeType(data): Observable < any > {
                    data.tokenId=this.gettokken;
 
                      return this._http.post(this.BASE_URL + this.FEE_TYPE_SAVE, data)
                  .map(res => < any > res)
                  .catch(this.handleError);
                 }
                 UpdatefeeType(data): Observable < any > {
                  data.tokenId=this.gettokken;

                     return this._http.post(this.BASE_URL + this.FEE_TYPE_UPDATE, data)
                  .map(res => < any > res)
                  .catch(this.handleError);
                 }
     // Handle Api Errors
    private handleError(error: Response) {
      console.log(error); 
       return Observable.throw(error);
    }
  }