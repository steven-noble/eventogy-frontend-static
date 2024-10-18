/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Tag from './index';

it("Tag renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Tag />);
});