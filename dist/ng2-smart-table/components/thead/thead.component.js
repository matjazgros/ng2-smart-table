import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
export class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
}
Ng2SmartTableTheadComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng2-st-thead]',
                templateUrl: './thead.component.html',
            },] },
];
/** @nocollapse */
Ng2SmartTableTheadComponent.ctorParameters = () => [];
Ng2SmartTableTheadComponent.propDecorators = {
    "grid": [{ type: Input },],
    "source": [{ type: Input },],
    "isAllSelected": [{ type: Input },],
    "createConfirm": [{ type: Input },],
    "sort": [{ type: Output },],
    "selectAllRows": [{ type: Output },],
    "create": [{ type: Output },],
    "filter": [{ type: Output },],
};
//# sourceMappingURL=thead.component.js.map