import './decorations.scss';

export function createDecorations(): HTMLElement {
  const decorations = document.createElement('div');
  decorations.className = 'decorations';

  const decorationTopRight = document.createElement('div');
  decorationTopRight.className =
    'decorations__item decorations__item--top-right';
  const dotsImg = document.createElement('img');
  dotsImg.src = '/dots.svg';
  dotsImg.alt = '';
  dotsImg.className = 'decorations__img';
  decorationTopRight.appendChild(dotsImg);

  const decorationLeft = document.createElement('div');
  decorationLeft.className = 'decorations__item decorations__item--left';
  const shapesLeftImg = document.createElement('img');
  shapesLeftImg.src = '/shapes.svg';
  shapesLeftImg.alt = '';
  shapesLeftImg.className = 'decorations__img';
  decorationLeft.appendChild(shapesLeftImg);

  const decorationBottomRight = document.createElement('div');
  decorationBottomRight.className =
    'decorations__item decorations__item--bottom-right';
  const shapesRightImg = document.createElement('img');
  shapesRightImg.src = '/shapes (1).svg';
  shapesRightImg.alt = '';
  shapesRightImg.className = 'decorations__img';
  decorationBottomRight.appendChild(shapesRightImg);

  decorations.appendChild(decorationTopRight);
  decorations.appendChild(decorationLeft);
  decorations.appendChild(decorationBottomRight);

  return decorations;
}
