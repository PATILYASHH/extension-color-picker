document.getElementById('copy').addEventListener('click', function() {
    const color = document.getElementById('color').value;
    navigator.clipboard.writeText(color).then(() => {
      alert('Color code copied to clipboard: ' + color);
    }).catch(err => {
      console.error('Failed to copy color code: ', err);
    });
  });
  