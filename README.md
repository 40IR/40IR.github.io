javascript:(function(){
  const url = 'https://40ir.github.io/bookmark/bookmarklet/midnight.js?' + Date.now();
  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(js => {
      let code = js.trim();
      if (code.startsWith('javascript:')) code = code.slice(11);   // ← this fixes your file
      console.log('✅ Midnight fetched & cleaned — running latest version');
      new Function(code)();
      // alert('✅ Midnight bookmarklet is now running!');
    })
    .catch(err => {
      console.error('❌ Midnight fetch failed:', err);
      alert('❌ Could not load Midnight.js\n\n' + err + '\n\nCheck console (F12) for details.');
    });
})();
