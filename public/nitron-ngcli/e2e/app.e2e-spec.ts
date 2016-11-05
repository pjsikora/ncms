import { NitronNgcliPage } from './app.po';

describe('nitron-ngcli App', function() {
  let page: NitronNgcliPage;

  beforeEach(() => {
    page = new NitronNgcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
