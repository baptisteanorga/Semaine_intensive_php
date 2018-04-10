const showResult= str => {
    if (str.length==0) { 
        document.querySelector('.livesearch').innerHTML="";
        document.querySelector('.livesearch').style.border="0px";
        return;
    }
        xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
        document.querySelector('.livesearch').innerHTML=this.responseText;
        document.querySelector('.livesearch').style.border="1px solid #A5ACB2";
        }
    }
    xmlhttp.open("GET","includes/livesearch.php?q="+str,true);
    xmlhttp.send();
    }

console.log('je suis chargé je suis la page js')