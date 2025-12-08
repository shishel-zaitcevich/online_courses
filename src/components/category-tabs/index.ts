import type { Course } from '../../data/types';
import { el } from '../../utils/dom';
import './category-tabs.scss';

export function createCategoryTabs(
  courses: readonly Course[],
  onCategoryChange: (category: string) => void
): HTMLElement {
  const filter = el('div', { className: 'filter' });
  const list = el('div', { className: 'filter__list' });
  filter.appendChild(list);

  const categories = [
    'All',
    ...Array.from(new Set(courses.map((c) => c.category))),
  ];

  const buttons = new Map<string, HTMLButtonElement>();

  categories.forEach((category) => {
    const item = el('div', { className: 'filter__item' });
    const button = el('button', {
      className: 'filter__button',
    }) as HTMLButtonElement;
    button.type = 'button';

    const categorySpan = el('span', {
      className: 'filter__category',
      text: category,
    });

    const count =
      category === 'All'
        ? courses.length
        : courses.filter((c) => c.category === category).length;

    const countSpan = el('span', {
      className: 'filter__count',
      text: String(count),
    });

    categorySpan.appendChild(countSpan);
    button.appendChild(categorySpan);
    item.appendChild(button);
    list.appendChild(item);

    buttons.set(category, button);

    if (category === 'All') button.classList.add('filter__button--active');

    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('filter__button--active'));
      button.classList.add('filter__button--active');
      onCategoryChange(category);
    });
  });

  return filter;
}
