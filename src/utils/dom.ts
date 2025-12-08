export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options?: {
    className?: string;
    attrs?: Record<string, string>;
    text?: string;
  }
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (options?.className) node.className = options.className;
  if (options?.text) node.textContent = options.text;
  if (options?.attrs) {
    Object.entries(options.attrs).forEach(([k, v]) => node.setAttribute(k, v));
  }
  return node;
}
