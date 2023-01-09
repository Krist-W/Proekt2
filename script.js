let isOpen = false
function openMenu () {
    const mobile = document.getElementById("mobileId")

    if (isOpen) {
       mobile.style.display = "none" 
       isOpen = false
       <span class="material-symbols-outlined">close</span>
    } else {
       mobile.style.display = "flex"
       isOpen = true
    }

}



                                        