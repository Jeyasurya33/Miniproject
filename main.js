let buttons = document.querySelectorAll('.btn-group button');
let boxes = document.querySelectorAll('.box');
let input = document.querySelector('#input')

input.addEventListener("keyup", (e) => {
    let src = e.target.value.toLowerCase().trim()
    boxes.forEach((box) => {
        let data = box.dataset.item;
        if (data.includes(src)) {
            box.style.display = "block"
        }
        else {
            box.style.display = "none"
        }

        
    })
        
 



});


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target);
    })
})

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(e);
        all(e)
        let btnfill = e.target.dataset.fillter;
// console.log(btnfill);
        boxes.forEach((box) => {
            if (btnfill == "all") {
                box.style.display = "block";
            }
            else {
                let boxfill = box.dataset.item;
                if (btnfill==boxfill) {
                    box.style.display = "block";
                    // console.log("cake");
                }
                else {
                    box.style.display = "none";
                }
            }
            
        })
    })
})




    
function all(e){
    buttons.forEach((button) => {
        button.classList.remove("clicked")
    })
    e.target.classList.add("clicked")
    // console.log(e);
}
