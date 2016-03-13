
///<reference path="../typings/jasmine/jasmine.d.ts"/>
//it('true is true', () => expect(true).toEqual(true));/
import { MenuPanel } from "../feel-ui";

describe("closing a menu panel", () => {
  it("should set open to false", () => {
    let menuPanel = new MenuPanel();

    menuPanel.closeMenuPanel();

    expect(menuPanel.open).toBe(false);
  });
});
