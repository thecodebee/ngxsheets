import { Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';

const SHEET_URL = "https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=1D4LfH5bF3_Iq0CIKW4Yqco9BLHUpAEZ0sWAvW4zBFTE&sheet=Class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Fetching data from Google Sheets in Angular app';
  sheetData: Object;
  loading: boolean;
  
//https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=YOUR_SPREAD_SHEET_ID&sheet=Sheet1
//https://script.google.com/macros/s/AKfycbxOLElujQcy1-ZUer1KgEvK16gkTLUqYftApjNCM_IRTL3HSuDk/exec?id=1D4LfH5bF3_Iq0CIKW4Yqco9BLHUpAEZ0sWAvW4zBFTE&sheet=Class

  constructor(private http: Http){

  }

  ngOnInit(){

  }

  fetchDataFromSheet() {
    this.loading = true;
    this.http.request(SHEET_URL)
    .subscribe((res: Response) => {
      this.sheetData = res.json().Class;
      this.loading = false;
    });
  }

}
