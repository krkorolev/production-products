import { fireEvent, render, screen } from "@testing-library/react";
import { StoreProvider } from "app/providers/storeProvider";
import { componentRender } from "shared/lib/test/renderWithTranslation/componentRender";
import Counter from "./Counter";


describe('Counter', () => {
  test('test render', () => {
      componentRender(<Counter />, {
          initialState: { counter: { value: 10 } },
      });
      expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
      componentRender(<Counter />, {
          initialState: { counter: { value: 10 } },
      });
      fireEvent.click(screen.getByTestId('increment-btn'));
      expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
      componentRender(<Counter />, {
          initialState: { counter: { value: 10 } },
      });
      fireEvent.click(screen.getByTestId('decrement-btn'));
      expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
