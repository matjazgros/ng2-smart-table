import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
export class CheckboxSelectAllComponent {
}
CheckboxSelectAllComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng2-st-checkbox-select-all]',
                template: `
    <input type="checkbox" [ngModel]="isAllSelected">
  `,
            },] },
];
/** @nocollapse */
CheckboxSelectAllComponent.ctorParameters = () => [];
CheckboxSelectAllComponent.propDecorators = {
    "grid": [{ type: Input },],
    "source": [{ type: Input },],
    "isAllSelected": [{ type: Input },],
};
//# sourceMappingURL=checkbox-select-all.component.js.map