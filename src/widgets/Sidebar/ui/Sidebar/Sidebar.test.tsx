import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

describe("Sidebar", () => {
  test("check class", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    render(
      <MemoryRouter>
        <SidebarWithTranslation />
      </MemoryRouter>
    );

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toogle", () => {
    // Что бы пользоваться переводом
    const SidebarWithTranslation = withTranslation()(Sidebar);
    render(
      <MemoryRouter>
        <SidebarWithTranslation />
      </MemoryRouter>
    );
    const toogleBtn = screen.getByTestId("sidebar-toogle");
    fireEvent.click(toogleBtn);
  });
});
