import { coursesData } from './data/courses';
import { createCategoryTabs } from './components/category-tabs';
import { createSearchBox } from './components/search';
import { createCourseGrid } from './components/course-grid';
import { createLoadMoreButton } from './components/loadMoreButton';
import './styles/globals.scss';
import type { Course } from './data/types';
import { createDecorations } from './components/decorations';

const root = document.getElementById('app');
if (!root) {
  throw new Error('Root element not found');
}

const appContainer = document.createElement('div');
appContainer.className = 'app-container';

const decorations = createDecorations();
root.appendChild(decorations);
let state = {
  category: 'All',
  query: '',
};

const header = document.createElement('header');
header.className = 'header';
header.innerHTML = `
  <div class="header__subtitle">ENJOY YOUR STUDYING!</div>
  <h1 class="header__title">Our online courses</h1>
`;
root.appendChild(header);

const onCategoryChange = (category: string) => {
  state = { ...state, category };
  updateView();
};
const categoryTabs = createCategoryTabs(coursesData, onCategoryChange);

const searchBox = createSearchBox((query) => {
  state = { ...state, query };
  updateView();
});

const grid = createCourseGrid(coursesData);

const topBar = document.createElement('div');
topBar.className = 'top-bar';
topBar.appendChild(categoryTabs);
topBar.appendChild(searchBox.node);
root.appendChild(topBar);

root.appendChild(grid.node);

const loadMoreButton = createLoadMoreButton(() => {
  state = { ...state };
  updateView();
});

root.appendChild(loadMoreButton);

function filterCourses(
  courses: readonly Course[],
  category: string,
  query: string
): Course[] {
  return courses.filter((c) => {
    const matchesCategory = category === 'All' ? true : c.category === category;
    const matchesQuery =
      query.length === 0
        ? true
        : c.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });
}

function updateView() {
  const filtered = filterCourses(coursesData, state.category, state.query);
  grid.update(filtered);
}

updateView();
