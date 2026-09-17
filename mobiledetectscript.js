// Mobile + Android TV Detection for Footer Ad
(function() {
  var ua = navigator.userAgent || '';
  var isAndroid = ua.indexOf('Android') > -1;
  var isAndroidTV = ua.indexOf('Android TV') > -1 || ua.indexOf('SmartTV') > -1 || ua.indexOf('Dalvik') > -1;
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  var isWebView = (isAndroid && ua.includes('wv')) || (ua.includes('iPhone') && !ua.includes('Safari'));

  var ad = document.getElementById('sticky-footer-ad');
  if (!ad) return;

  // Show ad only on mobile or Android TV, hide on desktop and webview
  if ((isMobile || isAndroidTV) && !isWebView) {
    ad.style.display = 'block';
  } else {
    ad.style.display = 'none';
  }

  // Close button
  var closeBtn = document.getElementById('close-ad');
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      ad.style.display = 'none';
    });
  }
})();
