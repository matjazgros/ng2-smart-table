import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
export class CompleterFilterComponent extends DefaultFilter {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerContent = new Subject();
    }
    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .map((ev) => (ev && ev.title) || ev || '')
            .distinctUntilChanged()
            .debounceTime(this.delay)
            .subscribe((search) => {
            this.query = search;
            this.setFilter();
        });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
CompleterFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'completer-filter',
                template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `,
            },] },
];
/** @nocollapse */
CompleterFilterComponent.ctorParameters = () => [
    { type: CompleterService, },
];
//# sourceMappingURL=completer-filter.component.js.map