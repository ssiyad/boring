function enableDarkMode() {
    const e = document.getElementsByTagName('html')[0];
    e.classList.add('dark');
    localStorage.setItem('is_darkmode_set', e.classList.contains('dark'));
}

function toggleDarkMode() {
    const e = document.getElementsByTagName('html')[0];
    e.classList.toggle('dark');
    localStorage.setItem('is_darkmode_set', e.classList.contains('dark'));
}

function toggleBackToTop() {
    const e = document.getElementById('back-to-top');
    if (window.scrollY === 0) e.classList.add('hidden');
    else e.classList.remove('hidden');
}

function backToTop() {
    window.scrollTo(0, 0);
}

if (localStorage.getItem('is_darkmode_set') === 'true') enableDarkMode();

document
    .getElementById('darkmode-toggle')
    .addEventListener('click', toggleDarkMode);

document
    .getElementById('back-to-top')
    .addEventListener('click', backToTop);

window.addEventListener('scroll', toggleBackToTop)

document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(function(codeBlock) {
    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    
    // Replace code block with wrapper
    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Select & copy';
    copyButton.className = 'copy-button';
    
    // Add copy functionality
    copyButton.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        // Change button text temporarily
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
          copyButton.textContent = originalText;
        }, 1500);
      }).catch(function(err) {
        console.error('Could not copy text: ', err);
      });
    });
    
    // Add button to wrapper
    wrapper.insertBefore(copyButton, pre);
  });
});
