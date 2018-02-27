import { Component, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
}
CustomViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'custom-view-component',
                template: `
    <ng-template #dynamicTarget></ng-template>
  `,
            },] },
];
/** @nocollapse */
CustomViewComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
];
CustomViewComponent.propDecorators = {
    "cell": [{ type: Input },],
    "dynamicTarget": [{ type: ViewChild, args: ['dynamicTarget', { read: ViewContainerRef },] },],
};
//# sourceMappingURL=custom-view.component.js.map