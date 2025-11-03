function openTab(evt, tabName) {
    // সব "tab-content" কে লুকিয়ে ফেলবে
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // সব "tablinks" (বাটন) থেকে "active" ক্লাসটি সরিয়ে ফেলবে
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // যেটিতে ক্লিক করা হয়েছে, সেই "tab-content" কে দেখাবে
    document.getElementById(tabName).style.display = "block";
    
    // যে বাটনটিতে ক্লিক করা হয়েছে, সেটিতে "active" ক্লাস যোগ করবে
    evt.currentTarget.className += " active";
}

// ডিফল্ট হিসেবে প্রথম ট্যাবটি (About Me) খোলা রাখবে
// আপনি যদি চান অন্য ট্যাব খোলা থাকুক, তাহলে 0 এর জায়গায় 1, 2, 3... লিখতে পারেন
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablinks")[0].click();
});
