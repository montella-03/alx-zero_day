let marks;
const savedData=JSON.parse(localStorage.getItem('marks'));
if (Array.isArray(savedData)) {
    marks = savedData;
    
}
else {
    marks = [{
    major: "math",
    dueDate: '12/11/2022',
    id:'id1'
}, {
        major: "computer",
    dueDate: '12/11/2023',
        id:'id2'
    }, { major: "engineering", dueDate: '12/12/2022' ,id:'id3'}];
    
}
 //model M section
render();

function createMarks(major, dueDate) {
     const id=' '+new Date().getTime();
    marks.push({
        major: major,
        dueDate: dueDate,
        id:id
    });
    saveMark();
    
}
function remove(idToDelete) {
    marks=marks.filter(function (subject) {
        if (subject.id === idToDelete) {
            return false;
        }
        else 
            return true;
        
    });
    saveMark();
}
function saveMark() {
    localStorage.setItem('marks', JSON.stringify(marks));
}

//controller section
function add() {
    const textbox = document.getElementById('title');//DOM
    const major = textbox.value;
    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    createMarks(major, dueDate);
   
    render();
}
function deleteList(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    remove(idToDelete);
    
    render();
    
    
}
//view section
function render() {
    //resetting our list to avoid duplicates.
    document.getElementById('subjects-done').innerHTML = '';
    marks.forEach(
    function subjects(subject) {
        const element = document.createElement("div");
            element.innerText = subject.major + " \n" + subject.dueDate;
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.style=('margin-left: 14px;')
            element.appendChild(deleteButton);
            deleteButton.onclick = deleteList;
            deleteButton.id = subject.id;
            const subjectsDone = document.getElementById('subjects-done');
       subjectsDone.appendChild(element);

    }
);
}



   
