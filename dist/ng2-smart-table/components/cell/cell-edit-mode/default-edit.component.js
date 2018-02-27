import { Component } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
export class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
DefaultEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-default-editor',
                templateUrl: './default-edit.component.html',
            },] },
];
/** @nocollapse */
DefaultEditComponent.ctorParameters = () => [];
//# sourceMappingURL=default-edit.component.js.map