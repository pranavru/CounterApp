/* eslint-disable no-prototype-builtins */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import { sum, mockFetchData } from './sum';

describe('Learning Jest:', () => {
  // Test to add 2 numbers
  test('should add 1 + 2 equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('should check Object Assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test('should match if the value is not equal to zero (0)', () => {
    for (let i = 1; i < 10; i += 1) {
      for (let j = 1; j < 10; j += 1) {
        expect(i + j).not.toBe(0);
      }
    }
  });

  test('should be null', () => {
    const testVariable = null;
    expect(testVariable).toBeNull;
    expect(testVariable).not.toBeNull;
    expect(testVariable).not.toBeDefined;
    expect(testVariable).not.toBeUndefined;
    expect(testVariable).toBeFalsy;
    expect(testVariable).not.toBeTruthy;
  });

  test('should Numbers be <, <=, >, >=', () => {
    const testVariable = 2 + 2;
    expect(testVariable).toBeGreaterThan(2);
    expect(testVariable).toBeLessThan(20);
    expect(testVariable).toBeGreaterThanOrEqual(4);
    expect(testVariable).toBeLessThanOrEqual(4);

    expect(testVariable).toBe(4);
    expect(testVariable).toEqual(4);
    expect(testVariable).toStrictEqual(4);
  });

  test('should Floating Numbers be equal', () => {
    const testVariable = 0.2 + 0.3;
    expect(testVariable).toBe(0.5);
    expect(testVariable).toBeCloseTo(0.5);
  });

  test('there is no I in team', () => {
    // It looks out for I regex such that It should not match any character
    // with passed parameter as 'team'
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    // It matches a string value in passed parameter such as Chri-"stop"-h
    expect('Christoph').toMatch(/stop/);
  });

  test('should match contents of array and Iterables like Set and Map', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  const compileAndCode = () => {
    throw new Error('Please use the correct version of JDK');
  };

  test('Compiling and throwing errors if required JDK not found', () => {
    expect(() => compileAndCode()).toThrow();
    expect(() => compileAndCode()).toThrow(Error);

    expect(() => compileAndCode()).toThrow(/Please use the correct version of JDK/);
  });

  test('should run an async method call', () => {
    function callback(data) {
      expect(data.hasOwnProperty('vuzixMap')).toBe(true);
    }
    mockFetchData(callback);
  });
});
