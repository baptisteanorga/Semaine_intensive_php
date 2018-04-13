const bios = Array.from(document.querySelectorAll('.bio'))


const showResult= str => {

    for (bio of bios){

        bio.style.display = "none"
        
    }

    if (str.length==0) { 
        document.querySelector('.live_search').innerHTML="";
        document.querySelector('.live_search').style.border="0px";
        return;
    }
        xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200){
        //handle bio 
        const remove_space = this.responseText.replace(/\s+/g, '') 
        const heroes_list = remove_space.split('<br>')
        for(heroe of heroes_list){
            for (bio of bios){
                if (bio.classList.contains(heroe)){
                    bio.style.display = "inline-block"
                }
            }
        }

        }
    }
    xmlhttp.open("GET","includes/livesearch.php?q="+str,true);
    xmlhttp.send();
    }



    function refuserToucheEntree(event)
    {
        // Compatibilité IE / Firefox
        if(!event && window.event) {
            event = window.event;
        }
        // IE
        if(event.keyCode == 13) {
            event.returnValue = false;
            event.cancelBubble = true;
        }
        // DOM
        if(event.which == 13) {
            event.preventDefault();
            event.stopPropagation();
        }
    }