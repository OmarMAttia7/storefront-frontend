import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
describe("<App /> Component", () => {
  it("has a specific paragraph", async () => {
    const reactApp = render(<App />);
    expect(await reactApp.findByText("work in progress")).toBeInTheDocument();
  });
});

export {};
