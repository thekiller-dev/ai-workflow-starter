import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom ne fournit ni matchMedia ni IntersectionObserver. On les
// simule ici pour que le code d'animation soit reellement execute
// pendant les tests, au lieu d'etre contourne.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});

class ObservateurFactice {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = "";
  thresholds = [];
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: ObservateurFactice,
});

// jsdom n'implemente pas ResizeObserver : le parcours s'en passe, mais
// on le simule pour que le code de mesure soit execute.
class RedimensionnementFactice {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: RedimensionnementFactice,
});
