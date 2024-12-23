import healthIndicator from "../health_indicator.js";

 test.each([
  ["Маг", 90, "healthy"],
  ["Mаг", 50, "wounded"],
  ["Mаг", 15, "critical"],
])(
  "testing health Indicator function with %h health",
  (_, health, expected) => {
    const result = healthIndicator(health);
    expect(result).toBe(expected);
  }
);
