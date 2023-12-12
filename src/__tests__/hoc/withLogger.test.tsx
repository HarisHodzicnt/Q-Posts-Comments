import { render } from "@testing-library/react";
import withLogger from "@hoc/withLogger";
import { HELLO_MESSAGE } from "@root/constants/global";
import { DummyComponent } from "@root/constants/defaultValues";

const consoleLog = jest.spyOn(console, "log");

describe("HOC <withLogger> test ", () => {
  test("Logs the default message when no custom message is provided", () => {
    const WrappedComponent = withLogger(DummyComponent);
    render(<WrappedComponent />);
    expect(consoleLog).toHaveBeenCalledWith(`${HELLO_MESSAGE} DummyComponent`);
  });

  test("Logs the custom message when provided", () => {
    const customMessage = `${HELLO_MESSAGE} test: `;
    const WrappedComponent = withLogger(DummyComponent);
    render(<WrappedComponent message={customMessage} />);
    expect(consoleLog).toHaveBeenCalledWith(`${customMessage} DummyComponent`);
  });
});
