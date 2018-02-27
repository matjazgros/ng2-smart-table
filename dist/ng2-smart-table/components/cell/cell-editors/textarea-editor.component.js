import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
export class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
TextareaEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'textarea-editor',
                styleUrls: ['./editor.component.scss'],
                template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
            },] },
];
/** @nocollapse */
TextareaEditorComponent.ctorParameters = () => [];
//# sourceMappingURL=textarea-editor.component.js.map