import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
export class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
InputEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-editor',
                styleUrls: ['./editor.component.scss'],
                template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `,
            },] },
];
/** @nocollapse */
InputEditorComponent.ctorParameters = () => [];
//# sourceMappingURL=input-editor.component.js.map