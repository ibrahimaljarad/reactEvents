import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Counter from "./Counter";

let container = null;
beforeEach(() => {

    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {

    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render ", () => {
    act(() => {
        render(<Counter />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();

    act(() => {
        render(<Counter />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();

    act(() => {
        render(<Counter />, container);
    });

    expect(
        pretty(container.innerHTML)
    ).toMatchInlineSnapshot();
});