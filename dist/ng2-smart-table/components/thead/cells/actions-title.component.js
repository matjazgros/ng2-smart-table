import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
export class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
ActionsTitleComponent.decorators = [
    { type: Component, args: [{
                selector: '[ng2-st-actions-title]',
                template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
            },] },
];
/** @nocollapse */
ActionsTitleComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ActionsTitleComponent.propDecorators = {
    "grid": [{ type: Input },],
};
//# sourceMappingURL=actions-title.component.js.map