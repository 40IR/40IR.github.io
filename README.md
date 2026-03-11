
javascript:(function(){
  const url = 'https://40ir.github.io/bookmark/bookmarklet/midnight.js?' + Date.now();
  fetch(url)
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(js => {
      console.log('✅ Midnight fetched successfully — running latest version');
      new Function(js)();           // runs the code exactly as if it were a script
      // alert('✅ Midnight bookmarklet loaded and executed!');
    })
    .catch(err => {
      console.error('❌ Midnight fetch failed:', err);
      alert('❌ Could not load Midnight.js\n\n' + err + '\n\nCheck console (F12) for details.');
    });
})();
