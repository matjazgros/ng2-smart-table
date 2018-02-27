import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
export class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
DefaultFilter.propDecorators = {
    "query": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "column": [{ type: Input },],
    "filter": [{ type: Output },],
};
//# sourceMappingURL=default-filter.js.map