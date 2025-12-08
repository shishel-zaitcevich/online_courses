import './loadMoreButton.scss';

export function createLoadMoreButton(onClick: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = 'load-more';
  button.type = 'button';
  button.setAttribute('aria-label', 'Load more courses');

  button.innerHTML = `
    <img src="/arrows.svg" alt="" class="load-more__icon">
    <span class="load-more__text">Load more</span>
  `;

  button.addEventListener('click', onClick);

  return button;
}
