import { mount } from "enzyme"
import { App } from "../../App"

 describe("Calculator", () => {
  it("renders correctly", () => {
    const wrapper = mount(<App/>)

    expect(wrapper.find("Calculator").length).toBe(1)
    expect(wrapper.find("Display").length).toBe(1)
    expect(wrapper.find("Numpad").length).toBe(1)
    expect(wrapper.find("ThemeToggler").length).toBe(1)
    expect(wrapper.find("Operator").length).toBe(1)
    expect(wrapper.find("Screen").length).toBe(1)
    expect(wrapper.find("NumpadButton").length).toBe(19)
  })
 })