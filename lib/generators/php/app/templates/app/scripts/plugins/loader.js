define([], function() {
  return function(src) {
    if (typeof src === 'string') src = [src];
    var i = src.length
      , fragment = document.createDocumentFragment()
      , el = document.createElement('script')
      , z, path;

    while (i--) {
      path = src[i];
      z = el.cloneNode(false);
      z.async = z.src = path;
      fragment.appendChild(z);
    }
    (z = document.getElementsByTagName('script')[0]).parentNode.insertBefore(fragment, z);
  };
});
