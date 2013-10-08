


describe('join', function() {
 it('should return "one and two and three" for array', function() {
 	var array = ["one", "two", "three"];
  expect(join(array, " and ")).toBe('one and two and three');
 });

 it('should return "Kerry, Claire, Meg" for array', function() {
 	var array = ["Kerry", "Claire", "Meg"];
  expect(join(array, ", ")).toBe('Kerry, Claire, Meg');
 });

})
//  it('should return Monday for 1', function() {
//   expect(getDayName(1)).toBe('Monday');
//  });
//  it('should return Tuesday for 2', function() {
//   expect(getDayName(2)).toBe('Tuesday');
//  });
//  it('should return Wednesday for 3', function() {
//   expect(getDayName(3)).toBe('Wednesday');
//  });
//  it('should return Thursday for 4', function() {
//   expect(getDayName(4)).toBe('Thursday');
//  });
//  it('should return Friday for 5', function() {
//   expect(getDayName(5)).toBe('Friday');
//  });
//  it('should return Saturday for 6', function() {
//   expect(getDayName(6)).toBe('Saturday');
//  });
// })
