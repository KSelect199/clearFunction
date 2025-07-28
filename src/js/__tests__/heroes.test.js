import sortHeroesByHealth from "../heroes";
describe("sortHeroesByHealth", () => {
  test("should sort heroes by health in descending order", () => {
    const input = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ];

    const expected = [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(expected);
    expect(result).not.toBe(input); // Проверяем, что это новый массив
  });

  test("should return empty array if input is empty", () => {
    const result = sortHeroesByHealth([]);
    expect(result).toEqual([]);
  });

  test("should handle single hero", () => {
    const input = [{ name: "маг", health: 50 }];
    const expected = [{ name: "маг", health: 50 }];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(expected);
    expect(result).not.toBe(input);
  });

  test("should handle heroes with same health", () => {
    const input = [
      { name: "A", health: 50 },
      { name: "B", health: 50 },
      { name: "C", health: 30 },
    ];

    const expected = [
      { name: "A", health: 50 },
      { name: "B", health: 50 },
      { name: "C", health: 30 },
    ];

    const result = sortHeroesByHealth(input);

    expect(result).toEqual(expected);
  });

  test("should throw error if input is not an array", () => {
    expect(() => sortHeroesByHealth("not array")).toThrow(
      "Expected an array of heroes"
    );
    expect(() => sortHeroesByHealth(null)).toThrow(
      "Expected an array of heroes"
    );
    expect(() => sortHeroesByHealth(undefined)).toThrow(
      "Expected an array of heroes"
    );
  });
});
