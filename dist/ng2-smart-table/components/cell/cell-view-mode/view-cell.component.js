import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class ViewCellComponent {
}
ViewCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `,
            },] },
];
/** @nocollapse */
ViewCellComponent.ctorParameters = () => [];
ViewCellComponent.propDecorators = {
    "cell": [{ type: Input },],
};
//# sourceMappingURL=view-cell.component.js.map