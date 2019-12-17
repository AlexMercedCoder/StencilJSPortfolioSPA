import { newE2EPage } from '@stencil/core/testing';

describe('am-resume', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<am-resume></am-resume>');

    const element = await page.find('am-resume');
    expect(element).toHaveClass('hydrated');
  });
});
