var btn = document.getElementById("todoSubmit");
	var i=0;
	btn.onclick = function(){
		var response=document.getElementById("todoInput");
		if(response.value.trim()!="")
		{
			var list = document.getElementById("todoResponse");
			var todoItem = document.createElement("LI");
			var completed = document.createElement("DIV");
			var todoItemContent = document.createTextNode(response.value.trim());
			var compContent = document.createTextNode("X");
			completed.appendChild(compContent);
			completed.id = "comp"+i;
			todoItem.appendChild(todoItemContent);
			todoItem.appendChild(completed);
			todoItem.id="todo"+i;
			todoItem.className="notcompleted";
			list.insertBefore(todoItem,list.childNodes[0]);
			i++;
			response.value="";
			completed.addEventListener("click",function(event)
			{
				event.preventDefault();
				var delEle=document.getElementById(event.target.id).parentNode;
				delEle.parentNode.removeChild(delEle);
			});
			todoItem.addEventListener("click",function(event){
				var id=event.target.id;
				var ele =document.getElementById(id);
				if(ele != null)
				{
					if (ele.classList[0] == "notcompleted") {
						ele.classList.remove("notcompleted");
						ele.className="completed";
						document.getElementById("comp"+id[id.length-1]).style.display = "block";
					}
					else
					{
						ele.classList.remove("completed");
						ele.className="notcompleted";
						document.getElementById("comp"+id[id.length-1]).style.display="none";
					}
				}
			});
		}
		else
		{
			response.value="";
		}
	}