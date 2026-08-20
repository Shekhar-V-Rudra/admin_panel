  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');
 
  function toggleSidebar(){
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  }
  menuToggle.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);


  const dropdown = document.querySelector(".country-dropdown");
const label = document.querySelector(".label-text");

dropdown.addEventListener("change", function () {
    label.textContent = this.value;
});

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

clearSearch.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.focus(); // Optional: Keep cursor in input
});

const userToggle = document.getElementById("userToggle");
const userMenu = document.getElementById("userMenu");

userToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    userMenu.classList.toggle("show");
});

document.addEventListener("click", function () {
    userMenu.classList.remove("show");
});

flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "M j, Y",

    onChange: function(selectedDates) {

        if(selectedDates.length === 2){

            const options = {
                month: "short",
                day: "numeric",
                year: "numeric"
            };

            const from = selectedDates[0].toLocaleDateString("en-US", options);
            const to = selectedDates[1].toLocaleDateString("en-US", options);

            document.getElementById("dateText").innerHTML =
                `${from} – ${to}`;
        }

    }
});



document.getElementById("resetBtn").addEventListener("click", function () {

    // Clear search input
    document.getElementById("searchInput01").value = "";

    // Reset dropdowns
    document.getElementById("department").selectedIndex = 0;
    document.getElementById("role").selectedIndex = 0;
    document.getElementById("status").selectedIndex = 0;
    document.getElementById("verification").selectedIndex = 0;
    document.getElementById("cities").selectedIndex = 0;
    document.getElementById("types").selectedIndex = 0;
    document.getElementById("agents").selectedIndex = 0;
    document.getElementById("plan").selectedIndex = 0;
    document.getElementById("payment").selectedIndex = 0;

});


const pages=document.querySelectorAll(".page-number");

let currentPage=1;

pages.forEach((page,index)=>{

    page.addEventListener("click",()=>{

        pages.forEach(btn=>btn.classList.remove("active"));

        page.classList.add("active");

        currentPage=index+1;

    });

});

document.getElementById("nextBtn").onclick=function(){

    if(currentPage<pages.length){

        currentPage++;

        updatePagination();

    }

}

document.getElementById("prevBtn").onclick=function(){

    if(currentPage>1){

        currentPage--;

        updatePagination();

    }

}

function updatePagination(){

    pages.forEach(btn=>btn.classList.remove("active"));

    pages[currentPage-1].classList.add("active");

}


flatpickr("#joinedDate", {
    mode: "range",
    dateFormat: "M d, Y",
    allowInput: false
});





