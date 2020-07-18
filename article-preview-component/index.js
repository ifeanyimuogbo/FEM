const share = () => {
  console.log('hi');
  if (window.screen.width < '992px') {
    document.querySelector('.article-meta').style.display = 'none';
  }

  document.querySelector('.share-meta').style.display = 'flex';
};
const furlshare = () => {
  document.querySelector('.share-meta').style.display = 'none';
  document.querySelector('.article-meta').style.display = 'flex';
};
function fbs_click() {
  u = location.href;
  t = document.title;
  window.open(
    'http://www.facebook.com/sharer.php?u=' +
      encodeURIComponent(u) +
      '&t=' +
      encodeURIComponent(t),
    'sharer',
    'toolbar=0,status=0,width=626,height=436'
  );
  return false;
}
