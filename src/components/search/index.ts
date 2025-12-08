import { el } from '../../utils/dom';
import './search.scss';

export function createSearchBox(onInput: (query: string) => void) {
  const wrap = el('div', { className: 'search' });
  const input = el('input', {
    className: 'search__input',
    attrs: { type: 'search', placeholder: 'Search course...', id: 'search_id' },
  }) as HTMLInputElement;

  const icon = el('img', {
    className: 'search__icon',
    attrs: { src: '/search.svg', alt: 'Search' },
  });

  wrap.append(input, icon);

  input.addEventListener('input', () => {
    onInput(input.value.trim());
  });

  return { node: wrap, input };
}
