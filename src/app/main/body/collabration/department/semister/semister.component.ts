 import { fuseAnimations } from '../../../../../core/animations';
 import {ColabrationService} from '../../collabarationweservice'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
 import { MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 import { FuseUtils } from '../../../../../core/fuseUtils';
import { FuseConfigService } from '../../../../../core/services/config.service';
 import {SemisterDialogComponent} from '../../../../body/dialog/semister-dialog/semister-dialog.component';
  import {
  MatTableDataSource
} from '@angular/material';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-semister',
  templateUrl: './semister.component.html',
  styleUrls: ['./semister.component.scss'],
  animations   : fuseAnimations

})
export class SemisterComponent implements OnInit {

  displayedColumns = ['Sno', 'semesterName', 'semStartDate','semEndDate','option'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild('filter') filter: ElementRef;
  productsService: any;
  ELEMENT_DATA: any;
  dataSource = new MatTableDataSource < Element > (ELEMENT_DATA);

  constructor(private web: ColabrationService,
     private fuseConfig: FuseConfigService,
    public dialog: MatDialog,
    public router:Router
  ) { 
    this.fuseConfig.setSettings({
      layout: {
          navigation: 'top',
      toolbar   : 'above',
         footer    : 'none'
      }
  });

  }
  CourseSelect(data){
     this.web.setSem(data.semesterId)
    this.router.navigate(['collabration/department/section'])
  }
addUser(){
  let dialogRef = this.dialog.open(SemisterDialogComponent, {
    height: '350px',
    width: '450px',
    data: {  type:'create'  }
 });
dialogRef.afterClosed().subscribe(result => {
this.getdepList();
});
}
update(data){
   let dialogRef = this.dialog.open(SemisterDialogComponent, {
    height: '350px',
    width: '450px',
    data: {  type:'update', data:data}
 });
dialogRef.afterClosed().subscribe(result => {
this.getdepList();
});

}
  ngOnInit() {
    this.getbranchList();
  }
getdepList(){
  var data = {
    courseBranchId:this.web.getCoursetBranchId
  }
  
   this.web.getlistSem(data).subscribe(res=>{
     console.log(JSON.stringify(res));
     this.dataSource = new MatTableDataSource < Element > (res.data);

  })
}
selectedCourse(){
  this.web.setBranch(this.selectedProject.courseBranchId);
  this.getdepList();

}
BranCouList:any;
selectedProject:any;
getbranchList(){
  var data = {};
  if(this.web.getCoursetId == false){
    alert("Please select Course");
    this.router.navigate(['collabration/department/course'])

  }else{
    data ={courseId:this.web.getCoursetId}


  }
this.web.getlistBran(data).subscribe(res=>{

  this.BranCouList = res.data;
   for( var i = 0 ;i< this.BranCouList.length ; i++) {
  if( this.web.getCoursetBranchId  == false) {

    this.selectedProject = {
      branchName:this.BranCouList[0].branchName,
      courseBranchId:this.BranCouList[0].courseBranchId

    }

    this.web.setBranch(this.BranCouList[0].courseBranchId);
   
  }else{
     if( this.BranCouList[i].courseBranchId == this.web.getCoursetBranchId) {
       this.selectedProject = {
        branchName:this.BranCouList[i].branchName,
        courseBranchId:this.BranCouList[i].courseBranchId

      }
     }
  }
}
 
 this.getdepList();
})
}
applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
}
export interface Element {
}

const ELEMENT_DATA: Element[] = [];
