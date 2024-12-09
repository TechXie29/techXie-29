  const viewportWidth = window.innerWidth;
  const width90Percent = viewportWidth * 1;
  document.querySelector('.outerbox').style.width = width90Percent + 'px';
  const images = document.querySelectorAll('.sliderbox img');
  const sliderWidth = width90Percent * images.length;
  document.querySelector('.sliderbox').style.width = sliderWidth + 'px';
  document.documentElement.style.setProperty('--slide-width', width90Percent + 'px');