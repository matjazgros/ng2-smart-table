import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
export class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
}
CellComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-smart-table-cell',
                template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `,
            },] },
];
/** @nocollapse */
CellComponent.ctorParameters = () => [];
CellComponent.propDecorators = {
    "grid": [{ type: Input },],
    "row": [{ type: Input },],
    "editConfirm": [{ type: Input },],
    "createConfirm": [{ type: Input },],
    "isNew": [{ type: Input },],
    "cell": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "mode": [{ type: Input },],
    "isInEditing": [{ type: Input },],
    "edited": [{ type: Output },],
};
//# sourceMappingURL=cell.component.js.map