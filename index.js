function insertMission(){
    const name = document.querySelector("input[name=name]").value;
    const add = document.querySelector("input[name=add]").value;
    const content = document.querySelector("textarea[name=content]").value;
    const createdAt= new Date();
    const vo = {name ,add ,content,createdAt};

    let arr = JSON.parse(localStorage.getItem("missionVoList"));
    if(!arr){arr=[];}

    arr.push(vo);

    localStorage.setItem("missionVoList",JSON.stringify(arr));
    alert("등록 완료 !");
    displayVoList()
}

function displayVoList(){
    console.log(123);
    
    const tbody = document.querySelector("#voListTable tbody");
    const voList = JSON.parse(localStorage.getItem("missionVoList"));
    console.log(voList);
    
    if(!voList){ voList = []; } 

    let str="";
    for(let i = 0; i<voList.length;++i){
        str += `
            <tr onclick="displayVoDetail(${i})">
                <td> ${i} </td>
                <td> ${voList[i].content} </td>
                <td> ${voList[i].createdAt} </td>
            </tr>
        `;
    }
    tbody.innerHTML = str;
}

function displayVoDetail(no){
    const voList = JSON.parse(localStorage.getItem("missionVoList"));
    const vo = voList[no];
    document.querySelector("#missionDetailNo").innerHTML= no;
    document.querySelector("#missionDetailName").innerHTML= vo.name;
    document.querySelector("#missionDetailAdd").innerHTML= vo.add;
    document.querySelector("#missionDetailContent").innerHTML=  vo.content;
    document.querySelector("#missionDetailCreatedAt").innerHTML= vo.createdAt;

    let selectedNo = localStorage.getItem("setSelectedBoardNo");
    selectedNo=no;
    localStorage.setItem("setSelectedBoardNo", no);
    document.querySelector("#modal").classList.add("active");

}

window.onload=function(){
    displayVoList();
}

function closeModal(){
    document.querySelector("#modal").classList.remove("active");
    
}

function deleteMission(){
    const result =confirm("의뢰를취소하시겠습니까?");
    if(!result){return;} 
    const no= localStorage.getItem("setSelectedBoardNo");
    const voList=JSON.parse(localStorage.getItem("missionVoList"));
    voList.splice(no,1)
    localStorage.setItem("missionVoList",JSON.stringify(voList))
    //삭제완료알람
    alert("삭제가 완료되었습니다");
    displayVoList()
}