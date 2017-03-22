(function () {
    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    var lists = {
        todo: document.getElementById('todo'),
        done : document.getElementById('done')
    };    
    
    var createTask = function(task, onCheck) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        var label = document.createElement('span');
		var bold = document.createElement('B');
        
        checkbox.type = 'checkbox';
//		alert('ad');
        checkbox.addEventListener('click', onCheck);
        label.textContent = task;
        
        li.appendChild(checkbox);
        li.appendChild(label);
        
        return li;
    }
    var addTask = function(msg) {
        lists.todo.appendChild(msg);
    };
    
    var onCheck = function(event) {
//		alert("apw");
        var task = event.target.parentElement;
        var list = task.parentElement.id;     
        
		lists[list==='done'?'todo':'done'].appendChild(task);
		this.checked = false;
    };
    
    var onInput = function () {
        var str = input.value.trim();
        
        if (str.length > 0) {
            addTask(createTask(str, onCheck));
			input.value = '';
			input.focus();
        }
    };
    btn.addEventListener('click', onInput);
    input.addEventListener('keyup', function (event) {
        var code = event.keyCode;
		
		if(code === 13){
			onInput();
			
		}
    });
    input.focus();
    
    
    
    
}());