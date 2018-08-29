import { PlatsModule } from './plats.module';

describe('PlatsModule', () => {
  let platsModule: PlatsModule;

  beforeEach(() => {
    platsModule = new PlatsModule();
  });

  it('should create an instance', () => {
    expect(platsModule).toBeTruthy();
  });
});
