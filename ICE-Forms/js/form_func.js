// For Add Degree Button
function addDegree() {
    
    var siblings = document.querySelectorAll('.education');
    var sibling_container = siblings[siblings.length-1];
    var form_block = document.createElement('div');
    form_block.classList.add("education");
    
    var el_list = [createDegreeDrop(),
                   createSimpleInput(" Institution name: ", {
                        type: "text",
                        name: "inst_name",
                        placeholder: "University of Michigan"}),
                   createSimpleInput(" Major: ", {
                        type: "text",
                        name: "Major",
                        placeholder: "Information System"}),
                   createSimpleInput(" GPA: ", {
                        type: "number",
                        step: "any",
                        name: "GPA",
                        min: "0",
                        max: "4"})];

    for (let el in el_list) {
        form_block.appendChild(el_list[el]);
        form_block.appendChild(document.createElement('br'));
    }
    
    sibling_container.parentNode.insertBefore(form_block, sibling_container.nextSibling);
   
    function createDegreeDrop() {
        var label = document.createElement('label');
        label.innerHTML = " Degree: ";
        var value_list = ["Highschool", "BS", "BA", "Meng", "MA", "MS", "PhD"]
        var text_list = ["Highschool", "B.S.", "B.A.", "M.Eng.", "M.A.", "M.S.", "PhD"]
        var select_list = document.createElement('select');
        for (let i in value_list) {
            let temp = document.createElement('option');
            temp.setAttribute('value', value_list[i]);
            temp.innerHTML = text_list[i];
            select_list.appendChild(temp);
        }
        label.appendChild(select_list);
        return label;
    }
    
    return false;
}

// For Add Work Button
function addWork() {
 
    var siblings = document.querySelectorAll('.work');
    var sibling_container = siblings[siblings.length-1];
    var form_block = document.createElement('div');
    form_block.classList.add("work");
    
    var el_list = [createSimpleInput(" Company name: ", {
                        type: "text",
                        name: "name",
                        placeholder: "Google"}),
                   createSimpleInput(" Job Title: ", {
                        type: "text",
                        name: "title",
                        placeholder: "Software Engineer"}),
                   createSimpleInput(" Join Date: ", {
                        type: "text",
                        name: "joindate"}),
                   createSimpleInput(" End Date: ", {
                        type: "text",
                        name: "enddate"})];

    for (let el in el_list) {
        form_block.appendChild(el_list[el]);
        form_block.appendChild(document.createElement('br'));
    }
    
    sibling_container.parentNode.insertBefore(form_block, sibling_container.nextSibling);

    return false;
}

// Simple Input Adding Helper Function
function createSimpleInput(txt, attr_dict) {
    var label = document.createElement('label');
    label.innerHTML = txt;
    var input = document.createElement('input');
    setAttributeHelper(input, attr_dict);
    label.appendChild(input);
    return label;
}

//Set Attribute Helper Function
function setAttributeHelper(el, attr) {
	for (let prop in attr) {
		el.setAttribute(prop, attr[prop]);
	}
}
