function setInitialData(){

    const name = document.querySelector("input[name=name]");
    const add = document.querySelector("input[name=add]");
    const content = document.querySelector("textarea[name=content]");
    const selectedNo = localStorage.getItem("setSelectedBoardNo");
    const voList=JSON.parse(localStorage.getItem("missionVoList"));
    const vo =voList[selectedNo];
    name.value= vo.name;
    add.value= vo.add;
    content.value =vo.content;
    console.log(vo.name);
    console.log(vo.add);
    console.log(vo.content);
    console.log(selectedNo);
    
}

setInitialData();

function editBoard(){
    const name = document.querySelector("input[name=name]");
    const add = document.querySelector("input[name=add]");
    const content = document.querySelector("textarea[name=content]");
    const selectedNo = localStorage.getItem("setSelectedBoardNo");
    const voList=JSON.parse(localStorage.getItem("missionVoList"));
    const vo =voList[selectedNo];
    
    vo.name=name.value;
    vo.add=add.value;
    vo.content=content.value;
    localStorage.setItem("missionVoList",JSON.stringify(voList));
    alert("수정완료");
    location.href="./index.html"
}