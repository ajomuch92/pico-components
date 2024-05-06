import { newE2EPage } from '@stencil/core/testing';

describe('p-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-container></p-container>');

    const element = await page.find('p-container');
    expect(element).toHaveClass('hydrated');
  });
});
