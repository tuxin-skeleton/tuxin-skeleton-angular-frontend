import { TuxinSkeletonAngularFrontendPage } from './app.po';

describe('tuxin-skeleton-angular-frontend App', () => {
  let page: TuxinSkeletonAngularFrontendPage;

  beforeEach(() => {
    page = new TuxinSkeletonAngularFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
