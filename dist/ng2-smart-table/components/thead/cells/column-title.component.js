import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
export class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
    }
}
ColumnTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-st-column-title',
                template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `,
            },] },
];
/** @nocollapse */
ColumnTitleComponent.ctorParameters = () => [];
ColumnTitleComponent.propDecorators = {
    "column": [{ type: Input },],
    "source": [{ type: Input },],
    "sort": [{ type: Output },],
};
//# sourceMappingURL=column-title.component.js.map