import { Component, VERSION } from '@angular/core';
import { ConfigService } from './config.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  tableData;
  ascSort = true;
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    //this.getTableData();
    this.getDataLocal();
  }

  getTableDataFromServer(){
    this.configService.getData().subscribe((res)=>{
      console.log('table data from server', res);
    });
  }

  getDataLocal(){
    this.tableData = this.configService.getLocalData();
    console.log('Table data from local', this.tableData);
  }

  sortToggle(){
    this.sortColumn()
  }

  
  sortColumn() {
    this.ascSort = !this.ascSort;
    if(this.ascSort) {
        this.tableData.sort((a, b) => {
          if ( a.name < b.name ){
            return -1;
          }
          if ( a.name > b.name ){
            return 1;
          }
          return 0;
          }); // For ascending sort
    } else {
        this.tableData.sort((a, b) => {
          if ( b.name < a.name ){
            return -1;
          }
          if ( b.name > a.name ){
            return 1;
          }
          return 0;
          }); // For descending sort
    }
  }
}

