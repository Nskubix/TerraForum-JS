//Select category
const selectList = document.querySelector(".select")

//1 guide 3 boss 5 PvP 7Help
let catSelected = 1

selectList.childNodes.forEach(child => {
    child.addEventListener("click", function(){
        // console.log("klik");
        for (let index = 1; index <= 7; index += 2) {
            selectList.childNodes[index].classList.remove("categoryselected")
            
        }
        child.classList.add("categoryselected")
        for (let index = 1; index <= 7; index += 2) {
            if(selectList.childNodes[index].classList.contains("categoryselected")){
                catSelected = index
                break
            }
        }
    });
});