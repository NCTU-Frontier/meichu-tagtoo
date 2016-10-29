import { MeichuTagtooPage } from './app.po';

describe('meichu-tagtoo App', function() {
  let page: MeichuTagtooPage;

  beforeEach(() => {
    page = new MeichuTagtooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
