import { newE2EPage } from '@stencil/core/testing';

describe('am-wp-blog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<am-wp-blog></am-wp-blog>');

    const element = await page.find('am-wp-blog');
    expect(element).toHaveClass('hydrated');
  });
});
