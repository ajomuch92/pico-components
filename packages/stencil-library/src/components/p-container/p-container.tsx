import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'p-container',
  shadow: false,
  scoped: false,
})
export class PContainer {
  @Prop() fluid: boolean = false;

  render() {
    return (
      <Host>
        <main class={this.fluid ? 'container-fluid' : 'container'}>
          <slot />
        </main>
      </Host>
    );
  }

}
