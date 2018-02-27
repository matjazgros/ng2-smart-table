import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
EditCellDefault.propDecorators = {
    "cell": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "edited": [{ type: Output },],
};
//# sourceMappingURL=edit-cell-default.js.map