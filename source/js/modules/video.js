const video = document.querySelector('.video');
const videoLink = document.querySelector('.video__link');
const videoButton = document.querySelector('.video__button');
const regexp = /https\:\/\/www\.youtube\.com\/watch\?v\=([a-zA-Z0-9_]+)/i;

const getVideoUrl = () => {
  const url = videoLink.href.match(regexp)[1];
  const videoOptions = '?rel=0&showinfo=0&autoplay=1';
  videoLink.removeAttribute('href');
  return 'https://www.youtube.com/embed/' + url + videoOptions;
};

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', getVideoUrl());
  iframe.classList.add('video__media');

  return iframe;
};

const setUpVideo = () => {
  video.addEventListener('click', () => {
    const iframe = createIframe();
    video.classList.add('video--enabled');

    videoButton.remove();
    videoLink.remove();
    video.appendChild(iframe);
  });
};

setUpVideo();
