/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Header from './index';

it("Header renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Header />);
});