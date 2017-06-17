import { Component, OnInit, Input } from '@angular/core';
import { ICrib } from './../crib';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  sortField: string = 'price';
  sortDirection: string = 'asc';
  cribs: Array<ICrib> = [];
  sortFields: Array<string> = ['type','price','bedrooms','bathroom','area'];
  

  constructor(private _http: Http, 
              private _cribsService : CribsService,
              private _utilService : UtilService
              ) { }
  ngOnInit() {
    this._cribsService.getDetail()
        .subscribe(
            data => this.cribs = data
          );
    this._cribsService.newCribsSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    )   
  }
}
/////////subscribe will always have data on left and right
////// map will have response on left and right