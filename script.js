// Fetch data from the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Populate the note section
    const noteContent = document.getElementById('note-content');
    noteContent.textContent = data.supportInfo.note;

    // Populate the support info section
    const supportTitle = document.getElementById('support-title');
    supportTitle.textContent = data.supportInfo.title;

    const supportList = document.getElementById('support-list');
    data.supportInfo.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      supportList.appendChild(li);
    });

    // Populate the accordion with JDK versions and download links
    const accordionContainer = document.getElementById('accordion-container');
    data.versions.forEach(version => {
      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';

      const header = document.createElement('h3');
      header.className = 'accordion-header';
      header.textContent = version.name;

      const content = document.createElement('div');
      content.className = 'accordion-content';

      const ul = document.createElement('ul');
      version.downloads.forEach(download => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = download.url;
        a.textContent = download.name;
        a.target = '_blank'; // Open link in a new tab
        li.appendChild(a);
        ul.appendChild(li);
      });

      content.appendChild(ul);
      accordionItem.appendChild(header);
      accordionItem.appendChild(content);
      accordionContainer.appendChild(accordionItem);

      // Add toggle functionality for accordion
      header.addEventListener('click', () => {
        const isExpanded = content.style.display === 'block';
        content.style.display = isExpanded ? 'none' : 'block';
      });
    });

    // Populate related links
    const relatedLinksList = document.getElementById('related-links-list');
    data.relatedLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.textContent = link.name;
      a.target = '_blank'; // Open link in a new tab
      li.appendChild(a);
      relatedLinksList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });