import { calculate } from '../calculate'

describe("Calculate helper", () => {
  it("correct addition", () => {
    expect(calculate(1, 2, "+")).toBe(3)
    expect(calculate(0.1, 0.2, "+")).toBe(0.3)
    expect(calculate(-1, -2, "+")).toBe(-3)
    expect(calculate(1, -2, "+")).toBe(-1)
    expect(calculate(-0.1, -0.2, "+")).toBe(-0.3)
    expect(calculate(-0.1, 0.2, "+")).toBe(0.1)
    expect(calculate(0.1, -0.2, "+")).toBe(-0.1)
  })

  it("correct subtraction", () => {
    expect(calculate(1, 2, "-")).toBe(-1)
    expect(calculate(0.1, 0.2, "-")).toBe(-0.1)
    expect(calculate(-1, -2, "-")).toBe(1)
    expect(calculate(1, -2, "-")).toBe(3)
    expect(calculate(-0.1, -0.2, "-")).toBe(0.1)
    expect(calculate(-0.1, 0.2, "-")).toBe(-0.3)
    expect(calculate(0.1, -0.2, "-")).toBe(0.3)
  })
  it("correct multiplication", () => {
    expect(calculate(1, 2, "*")).toBe(2)
    expect(calculate(0.1, 0.2, "*")).toBe(0.02)
    expect(calculate(-1, -2, "*")).toBe(2)
    expect(calculate(1, -2, "*")).toBe(-2)
    expect(calculate(-0.1, -0.2, "*")).toBe(0.02)
    expect(calculate(-0.1, 0.2, "*")).toBe(-0.02)
    expect(calculate(0.1, -0.2, "*")).toBe(-0.02)
  })

  it("correct division", () => {
    expect(calculate(1, 2, "/")).toBe(0.5)
    expect(calculate(0.1, 0.2, "/")).toBe(0.5)
    expect(calculate(-1, -2, "/")).toBe(0.5)
    expect(calculate(1, -2, "/")).toBe(-0.5)
    expect(calculate(-0.1, -0.2, "/")).toBe(0.5)
    expect(calculate(-0.1, 0.2, "/")).toBe(-0.5)
    expect(calculate(0.1, -0.2, "/")).toBe(-0.5)
  })
})