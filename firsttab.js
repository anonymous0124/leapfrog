document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Get all tabs and tab contents
    const tabs1 = document.querySelectorAll('.tab1');
    const tabContents1 = document.querySelectorAll('.tab1-cont');

    // Step 2: Add a click event listener to each tab
    tabs1.forEach(tab1 => {
      tab1.addEventListener('click', () => {
        // Step 3: Get the ID of the content to show from the clicked tab
        const target1 = tab1.getAttribute('data-tab');

        // Step 4: Remove 'active' class from all tabs and contents
        tabs1.forEach(t1 => t1.classList.remove('active'));
        tabContents1.forEach(tc1 => tc1.classList.remove('active'));

        // Step 5: Add 'active' class to the clicked tab and the corresponding content
        tab1.classList.add('active');
        document.getElementById(target1).classList.add('active');
      });
    });
  });