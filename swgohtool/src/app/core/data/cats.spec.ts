import { categories, Cats } from './cats';

describe('Cats', () => {
  it('should create an instance', () => {
    expect(new Cats()).toBeTruthy();
  });

  it('should create an instance and check the farms', () => {
    let cats = new categories();
    expect(cats.cpit.name).toEqual("Cpit");
  });
});
