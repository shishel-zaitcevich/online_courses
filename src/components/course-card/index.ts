import type { Course } from '../../data/types';
import { el } from '../../utils/dom';
import { formatPrice } from '../../utils/format';
import './course-card.scss';

const categoryToClass: Record<string, string> = {
  Marketing: 'marketing',
  Management: 'management',
  'HR & Recruiting': 'hr',
  Design: 'design',
  Development: 'development',
};

export function createCourseCard(course: Course): HTMLElement {
  const card = el('article', { className: 'course-card' });

  const imgWrap = el('div', { className: 'course-card__image' });
  const img = el('img', {
    attrs: { src: course.image, alt: course.author },
  }) as HTMLImageElement;
  img.loading = 'lazy';
  imgWrap.appendChild(img);

  const content = el('div', { className: 'course-card__content' });

  const badgeClass = categoryToClass[course.category] || 'marketing';
  const badge = el('span', {
    className: `course-card__badge course-card__badge--${badgeClass}`,
    text: course.category,
  });

  const title = el('h3', {
    className: 'course-card__title',
    text: course.title,
  });

  const footer = el('div', { className: 'course-card__footer' });
  const price = el('span', {
    className: 'course-card__price',
    text: formatPrice(course.price),
  });
  const divider = el('span', { className: 'course-card__divider' });
  const author = el('span', {
    className: 'course-card__author',
    text: `by ${course.author}`,
  });

  footer.append(price, divider, author);
  content.append(badge, title, footer);

  card.append(imgWrap, content);

  return card;
}
