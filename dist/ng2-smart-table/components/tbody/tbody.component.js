import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
export class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
}
Ng2SmartTableTbodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng2-st-tbody]',
                styleUrls: ['./tbody.component.scss'],
                templateUrl: './tbody.component.html',
            },] },
];
/** @nocollapse */
Ng2SmartTableTbodyComponent.ctorParameters = () => [];
Ng2SmartTableTbodyComponent.propDecorators = {
    "grid": [{ type: Input },],
    "source": [{ type: Input },],
    "deleteConfirm": [{ type: Input },],
    "editConfirm": [{ type: Input },],
    "rowClassFunction": [{ type: Input },],
    "save": [{ type: Output },],
    "cancel": [{ type: Output },],
    "edit": [{ type: Output },],
    "delete": [{ type: Output },],
    "custom": [{ type: Output },],
    "edited": [{ type: Output },],
    "userSelectRow": [{ type: Output },],
    "editRowSelect": [{ type: Output },],
    "multipleSelectRow": [{ type: Output },],
    "rowHover": [{ type: Output },],
};
//# sourceMappingURL=tbody.component.js.map