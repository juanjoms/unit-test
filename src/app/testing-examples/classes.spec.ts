import { Utility } from "./classes";

describe('Utitily class', () => {
  let utility: Utility;
  beforeEach(() => {
    utility = new Utility();
  });

  it('should find the largest number in an array', () => {
    const result = utility.findMax([3, 5, 6, 3]);
    expect(result).toBe(6);
  });

  it('should navigate to some url', () => {
    const spy = spyOn(history, 'pushState');

    utility.navigateTo('/about');

    expect(spy).toHaveBeenCalledWith(null, '', '/about');
  });

});
