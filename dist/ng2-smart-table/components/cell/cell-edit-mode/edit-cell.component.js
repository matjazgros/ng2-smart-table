import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
EditCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-edit-mode',
                template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `,
            },] },
];
/** @nocollapse */
EditCellComponent.ctorParameters = () => [];
EditCellComponent.propDecorators = {
    "cell": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "edited": [{ type: Output },],
};
//# sourceMappingURL=edit-cell.component.js.map