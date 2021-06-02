/**
 * searchFilter.js
 * 
 * Functionality:
 *  As the user types into the search input, only photos that match the caption text appear.
 *  Case insensitivity has been added, searches will ignore letter case. 
 * 
 * Installation: 
 *  Add searchFilter.js into your js folder
 *  Add this line into your index.html <script src="js/searchFilter.js"></script>
 *   
 * Utilization:
 *  Ensure that your search input is setup like this in your index.html:
 *   <input type="search" name="search" id="search" placeholder="Search">
 *  Ensure that your image captions are added to your anchor elements via the data-caption attribute:
 *   <a href="photos/my-image.jpg" data-caption="A picture of me coding JavaScript on my computer">
 *  Add this into your app.js file:
 *   const search = new Filter('search', 'data-caption');
 */


// Custom Search Filter

function search_photo() {
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByTagName('a');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
           x[i].style.display="none";
       }
       else {
           x[i].style.display="list-item";
       }
    }
 }
 
 