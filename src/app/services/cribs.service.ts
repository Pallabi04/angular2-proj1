import { Injectable,OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CribsService implements OnInit {

	public newCribsSubject = new Subject <any>();
  constructor(private _http : Http) { }
  getDetail(): any {
  	return this._http.get('data/cribs.json')
  		.map(response => response.json())
  }
  /*.map(function(response) {
  			return response.json()
  		})*/  // actual map function

  	addCribs(data) {
  		data.image = 'default-crib';
  		this.newCribsSubject.next(data);
  	}	
ngOnInit() {}
}
