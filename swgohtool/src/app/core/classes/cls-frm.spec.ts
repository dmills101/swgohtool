import { ClsFrm, Farm, FarmUnit } from './cls-frm';

describe('ClsFrm', () => {
  it('should create an instance', () => {
    expect(new ClsFrm()).toBeTruthy();
  });

  it('should create a farm', () => {
    let cls= new Farm("Test farm","event",   'dark',
    [
        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 7),
        new FarmUnit('Kylo Ren (Unmasked)', 7, 13, 7),
        new FarmUnit('General Hux', 7, 13, 5),
        new FarmUnit('Wat Tambor', 7, 13, 5),
        new FarmUnit('Grand Admiral Thrawn', 7, 13, 6),


    ],
    [],
    'Phase(1) 22%');
    expect(cls.name).toEqual("Test farm");
  });
});
