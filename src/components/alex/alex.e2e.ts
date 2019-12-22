import { newE2EPage } from '@stencil/core/testing';

describe('meet-alex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<meet-alex></meet-alex>');

    const element = await page.find('meet-alex');
    expect(element).toHaveClass('hydrated');
  });
});
