import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";

describe("Sidebar", () => {
  test("check class", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    render(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toogle", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    render(<SidebarWithTranslation />);
    const toogleBtn = screen.getByTestId("sidebar-toogle");
    fireEvent.click(toogleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
