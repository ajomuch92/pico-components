/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PContainer {
        "fluid": boolean;
    }
}
declare global {
    interface HTMLPContainerElement extends Components.PContainer, HTMLStencilElement {
    }
    var HTMLPContainerElement: {
        prototype: HTMLPContainerElement;
        new (): HTMLPContainerElement;
    };
    interface HTMLElementTagNameMap {
        "p-container": HTMLPContainerElement;
    }
}
declare namespace LocalJSX {
    interface PContainer {
        "fluid"?: boolean;
    }
    interface IntrinsicElements {
        "p-container": PContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p-container": LocalJSX.PContainer & JSXBase.HTMLAttributes<HTMLPContainerElement>;
        }
    }
}
