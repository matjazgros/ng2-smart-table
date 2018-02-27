import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import { DefaultFilter } from './default-filter';
export class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .skip(1)
            .distinctUntilChanged()
            .debounceTime(this.delay)
            .subscribe((value) => this.setFilter());
    }
}
SelectFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-filter',
                template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="query"
            [formControl]="inputControl">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
            },] },
];
/** @nocollapse */
SelectFilterComponent.ctorParameters = () => [];
//# sourceMappingURL=select-filter.component.js.map