(function () {
  if (localStorage.getItem('age-verified') === '1') return;

  var overlay = document.createElement('div');
  overlay.id = 'age-verify-overlay';
  overlay.innerHTML = [
    '<div id="age-verify-box">',
    '  <p id="age-verify-warning">当サイトはアダルトコンテンツを含みます</p>',
    '  <p id="age-verify-question">あなたは18歳以上ですか？</p>',
    '  <div id="age-verify-buttons">',
    '    <button id="age-verify-yes">18歳以上・入室する</button>',
    '    <button id="age-verify-no">18歳未満・退出する</button>',
    '  </div>',
    '</div>'
  ].join('');

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.getElementById('age-verify-yes').addEventListener('click', function () {
    localStorage.setItem('age-verified', '1');
    overlay.remove();
    document.body.style.overflow = '';
  });

  document.getElementById('age-verify-no').addEventListener('click', function () {
    window.location.href = 'https://www.google.com';
  });
})();
