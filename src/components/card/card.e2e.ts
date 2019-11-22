import { newE2EPage } from '@stencil/core/testing';

describe('am-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<am-card></am-card>');

    const element = await page.find('am-card');
    expect(element).toHaveClass('hydrated');
  });
});
