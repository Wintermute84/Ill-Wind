function popup(ids,modals,closes){
    const openBtn = document.getElementById(`${ids}`);
    const closeBtn = document.getElementById(`${closes}`);
    const modal = document.getElementById(`${modals}`);
    modal.classList.add("open");

    closeBtn.addEventListener("click",()=>{
      modal.classList.remove("open");
    });
}

