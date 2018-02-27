import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
export class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
            },] },
];
/** @nocollapse */
TbodyCustomComponent.ctorParameters = () => [];
TbodyCustomComponent.propDecorators = {
    "grid": [{ type: Input },],
    "row": [{ type: Input },],
    "source": [{ type: Input },],
    "custom": [{ type: Output },],
};
//# sourceMappingURL=custom.component.js.map