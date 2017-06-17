import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
	@ViewChild('newFormValues') newFormValues

  constructor(private _cribsServive : CribsService) { }
  propertyTypes: Array<string> = ['Condo','House','Duplex'];
  showForms: boolean = false;

  //@Input('showForm') showForm: boolean = false

  ngOnInit() {
  }
	getFormValues(data):void {
		this._cribsServive.addCribs(data);
		this.newFormValues.reset();
    this.showForms = false;
	}
  showForm():any {
    this.showForms = !this.showForms
  }
}
