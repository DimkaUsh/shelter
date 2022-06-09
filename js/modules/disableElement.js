const disableElement = (el, time) => {
  el.style.pointerEvents = 'none';
  setTimeout(() => (el.style.pointerEvents = 'auto'), time);
};

export default disableElement;
