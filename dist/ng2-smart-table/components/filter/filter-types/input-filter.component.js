import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import { DefaultFilter } from './default-filter';
export class InputFilterComponent extends DefaultFilter {
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
InputFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-filter',
                template: `
    <input [(ngModel)]="query"
           [ngClass]="inputClass"
           [formControl]="inputControl"
           class="form-control"
           type="text"
           placeholder="{{ column.title }}" />
  `,
            },] },
];
/** @nocollapse */
InputFilterComponent.ctorParameters = () => [];
//# sourceMappingURL=input-filter.component.js.map