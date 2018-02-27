import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
export class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomEditComponent.decorators = [
    { type: Component, args: [{
                selector: 'table-cell-custom-editor',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `,
            },] },
];
/** @nocollapse */
CustomEditComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
];
CustomEditComponent.propDecorators = {
    "dynamicTarget": [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=custom-edit.component.js.map