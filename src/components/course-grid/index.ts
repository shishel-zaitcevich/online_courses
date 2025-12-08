import { createCourseCard } from '../course-card';
import { el } from '../../utils/dom';
import './course-grid.scss';
import type { Course } from '../../data/types';

export function createCourseGrid(initialCourses: readonly Course[]) {
  const container = el('section', { className: 'course-grid' });

  const list = el('div', { className: 'course-grid__list' });
  container.appendChild(list);

  function render(courses: readonly Course[]) {
    list.innerHTML = '';
    courses.forEach((c) => {
      const card = createCourseCard(c);
      list.appendChild(card);
    });
  }

  render(initialCourses);

  return {
    node: container,
    update: (courses: readonly Course[]) => render(courses),
  };
}
