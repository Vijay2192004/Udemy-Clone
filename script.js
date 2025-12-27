function searchItems (){
    const input =document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const list = document.getElementById("itemList");
    const items = list.getElementsByTagName("h3");


    for (let i = 0 ;i<items.length; i++){
  
        let text = items[i].textContent|| items[i].innerText;
        if (text.toLocaleLowerCase().includes(filter)){
            items[i].style.display ="";

        } else{
            items[i].style.display = "none";

        }
    }

}