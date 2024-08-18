document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Get all tabs and tab contents
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-cont');

    // Step 2: Add a click event listener to each tab
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Step 3: Get the ID of the content to show from the clicked tab
        const target = tab.getAttribute('data-tab');

        // Step 4: Remove 'active' class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));

        // Step 5: Add 'active' class to the clicked tab and the corresponding content
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });
  });