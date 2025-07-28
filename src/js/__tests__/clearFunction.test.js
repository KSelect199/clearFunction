import health from "../clearFunction";

test.each([
  ["healthy", { name: "Маг", health: 90 }, "healthy"],
  ["wounded", { name: "Маг", health: 40 }, "wounded"],
  ["critical", { name: "Маг", health: 1 }, "critical"],
])("testing health %s", (_, indicators, expected) => {
  const result = health(indicators);
  expect(result).toBe(expected);
});
