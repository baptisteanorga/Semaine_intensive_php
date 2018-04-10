const vignettes = Array.from(document.querySelectorAll('.vignette'))


const showResult= str => {

    for (vignette of vignettes){

        vignette.style.display = "none"
        
    }

    if (str.length==0) { 
        document.querySelector('.livesearch').innerHTML="";
        document.querySelector('.livesearch').style.border="0px";
        return;
    }
        xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200){
        //handle Vignette 
        const remove_space = this.responseText.replace(/\s+/g, '') 
        const heroes_list = remove_space.split('<br>')
        for(heroe of heroes_list){
            for (vignette of vignettes){
                if (vignette.classList.contains(heroe)){
                    vignette.style.display = "inline-block"
                }
            }
        }
        console.log(heroes_list)


        //Handle research 
        document.querySelector('.livesearch').innerHTML=this.responseText;
        document.querySelector('.livesearch').style.border="1px solid #A5ACB2";
        }
    }
    xmlhttp.open("GET","includes/livesearch.php?q="+str,true);
    xmlhttp.send();
    }

