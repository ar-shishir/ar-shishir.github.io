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
// এই কোডটি নিশ্চিত করে যে পেইজটি লোড হওয়ার পরই যেন জাভাস্ক্রিপ্টটি চলে
document.addEventListener("DOMContentLoaded", function() {
    // 0 মানে প্রথম বাটন। আপনি 1 লিখলে দ্বিতীয় বাটনটি (Education) ডিফল্ট হিসেবে খোলা থাকবে।
    document.getElementsByClassName("tablinks")[0].click();
});
