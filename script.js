const frstn = document.querySelector(".firstname");
const lstn = document.querySelector(".lastname");
const Ctry = document.querySelector(".country");
const Score = document.querySelector(".numb");
const button = document.querySelector("form");
const L_B_S = document.querySelector(".leader_bord_sec");
const Error = document.querySelector(".error_msg");

const students = [];


button.addEventListener('submit', (e)=>{
    const f_n = frstn.value;
    const l_n = lstn .value;
    const ctry = Ctry.value;
    const score = Score.value;
    
    students[" "];
    e.preventDefault();

    Error.style.display ="none";

    if(f_n === "" || l_n === "" || ctry === "" || score === ""){
        Error.style.display ="block";
        return;
    }
    else if(f_n.startsWith(" ") || l_n.startsWith(" ") || ctry.startsWith(" ") || score.startsWith(" ")){
        Error.style.display ="block";
        return;
    }
    

    const student = {
        firstName: f_n,
        lastName: l_n,
        country: ctry,
        score: parseInt(score)
    };
    
    students.push(student);
    sort(students);
})



function sort(student){
    // sort
    student.sort((a, b) => b.score - a.score);

    L_B_S.innerHTML="";
    

    student.forEach((student,index) =>{

        // L_B_S.innerHTML="";

    let main_bord = document.createElement("div");
    main_bord.classList.add("main_bord_css");

    main_bord.innerHTML= `

            
            
            <div class="sepret_bord">
                <div class="dt">
                    <p class="nm"> ${student.firstName} ${student.lastName}</p>
                    <p class="nm"> ${generateDateAndTime()}</p>
                </div>
                
                <p class = "cntry"> ${student.country}</p>
                <p class = "scr"> ${student.score}</p>
            </div>
            <div class=" number_sec">
                <span class = "dlt"  onclick ="dltx(event)"> &#x1f5d1;</span>
                <p class = "fivpls" value=${index} onclick="addFive(event)">+5</p>
                <p class="minusfiv" value=${index} onclick="minusFive(event)">-5</p>
            </div>
    `
        L_B_S.appendChild(main_bord);   
        
    })
}

function dltx(event,index){
    event.target.parentNode.parentNode.remove();
    students.splice(index,1);
    
}

function addFive(e){
    e.target.parentElement.parentElement.children[0].children[2].innerText = (parseInt(e.target.parentElement.parentElement.children[0].children[2].innerText) + 5).toString();
    // sort(students);
    // console.log(e);
    const newindex = e.target.attributes.value.value;
    students[newindex].score+=5;
    // console.log(students);
    sort(students);
}

function minusFive(e){

        e.target.parentElement.parentElement.children[0].children[2].innerText -= 5;
        const newindex = e.target.attributes.value.value;
        students[newindex].score-=5;
        sort(students);
}

function generateDateAndTime(){
    let dateObject = new Date();
    console.log(dateObject);
    let month = dateObject.toLocaleString("default",{month:"long"})
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    hr = dateObject.getHours(),
    mnt = dateObject.getMinutes(),
    sec = dateObject.getSeconds();
    // console.log(time);
    let generateResult = `${month} ${day} , ${year}  ${hr}:${mnt}:${sec}`
        return generateResult;
}

