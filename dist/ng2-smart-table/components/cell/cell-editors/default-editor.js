import { Output, EventEmitter, Input } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
DefaultEditor.propDecorators = {
    "cell": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "onStopEditing": [{ type: Output },],
    "onEdited": [{ type: Output },],
    "onClick": [{ type: Output },],
};
//# sourceMappingURL=default-editor.js.map