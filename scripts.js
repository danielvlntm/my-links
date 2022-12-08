const btnTheme = document.querySelector('.fa-circle-half-stroke')
const html = document.querySelector('html');

function getStyle(element, style) {
  return window.getComputedStyle(element).getPropertyValue(style);
}

function transformKey(key) {
  return '--' + key;
}

function changeColors(colors) {
  Object.keys(colors).map(key => {
    html.style.setProperty(transformKey(key), colors[key]);
  })
}

const initialColors = {
  bgWhite: getStyle(html, '--bgWhite'),
  bgBlack: getStyle(html, '--bgBlack'),
  bgGreyLight: getStyle(html, '--bgGreyLight'),
  bgGrey: getStyle(html, '--bgGrey'),
  bgGreyDark: getStyle(html, '--bgGreyDark'),
  bgGreenLight: getStyle(html, '--bgGreenLight'),
  bgGreen: getStyle(html, '--bgGreen'),

  bdWhite: getStyle(html, '--bdWhite'),
  bdBlack: getStyle(html, '--bdBlack'),
  bdGreyLight: getStyle(html, '--bdGreyLight'),
  bdGrey: getStyle(html, '--bdGrey'),
  bdGreyDark: getStyle(html, '--bdGreyDark'),
  bdGreen: getStyle(html, '--bdGreen'),

  txtWhite: getStyle(html, '--txtWhite'),
  txtDark: getStyle(html, '--txtDark'),
  txtGreyDark: getStyle(html, '--txtGreyDark')
};

const lightTheme = {
  bgWhite: '#000000',
  bgBlack: '#000000',
  bgGreyLight: '#000000',
  bgGrey: '#000000',
  bgGreyDark: '#ffffff',
  bgGreenLight: '#37FFBF',
  bgGreen: '#0df3a0',

  bdWhite: '#ffffff',
  bdBlack: '#ffffff',
  bdGreyLight: '#ffffff',
  bdGrey: '#ffffff',
  bdGreyDark: '#ffffff',
  bdGreen: '#ffffff',

  txtWhite: '#161616',
  txtDark: '#161616',
  txtGreyDark: '#161616'
};


btnTheme.addEventListener('click', () => {
  btnTheme.classList.toggle('active');
  if (btnTheme.classList.contains('active')) {
    changeColors(lightTheme);
    document.querySelector('.fa-circle-half-stroke').style.color = '#161616';
  } else {
    changeColors(initialColors);
    document.querySelector('.fa-circle-half-stroke').style.color = '#ffffff';
  }
})

