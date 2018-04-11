//set variables

$unknown_name_0=document.querySelector('.unknown_name_0')
$unknown_name_1=document.querySelector('.unknown_name_1')


$stickers= Array.from(document.querySelectorAll('.sticker'));
$result_bar_0= document.querySelector('.result_bar_0')
$result_bar_1= document.querySelector('.result_bar_1')
$input_fight=document.querySelector('.fight')

let $name_0 =null
let $name_1 =null
let selected_element=0

for(let i=0; i<$stickers.length;i++)
{  
    $stickers[i].addEventListener('click',()=>
    {     
        if((selected_element>=0) && (selected_element<2))           
        {
            if((selected_element==0)&&($name_0==null))
            {
                $name_0 = stickers[i].dataset.name
                $id_0 = stickers[i].dataset.id
                selected_element++
                $unknown_name_0.innerHTML='Name1 selected : '+$name_0
                console.log($id_0)
            }

            else if((selected_element==1)&&($name_1==null))
            {
                $name_1 = stickers[i].dataset.name
                $id_1 = stickers[i].dataset.id
                selected_element++
                $unknown_name_1.innerHTML='Name2 selected : '+$name_1
                console.log($id_1)
            }

            add_name()
        }
       
    });
}

//Remove selected_element to 0
$input_fight.addEventListener('click',()=>
{
    selected_element=0

})

const add_name=()=>
{
    if(selected_element==2)
    {
        
        $result_bar_0.value= $id_0
        $result_bar_1.value= $id_1
        $input_fight.style.display="inline-block"
        
    }
}




