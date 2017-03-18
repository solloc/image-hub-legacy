import { ImageHubPage } from './app.po';

describe('image-hub App', () => {
  let page: ImageHubPage;

  beforeEach(() => {
    page = new ImageHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
