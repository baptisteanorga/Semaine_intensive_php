<?php 
            
             $hero_id = (int)$_GET['name'];
            if( !isset($hero_id) || empty($hero_id) || ($hero_id>731) || ($hero_id<1) ){
                $hero_id = 13;
            }
            $url = 'http://superheroapi.com/api/1584552111592365/' . $hero_id;
            $path = 'cache/'.md5($url);
            if(file_exists($path) && time() - filemtime($path) < 10)
            {
                
                $hero_info = json_decode(file_get_contents($path));
            }
            else
            {
                
                $hero_info = json_decode(file_get_contents($url));
                file_put_contents($path, json_encode($hero_info));
            }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
            
            <!--- Hero id - card -->
            <img class="img_sticker" src= "<?= str_replace('http://', 'https://', $hero_info->image->url )?>" width="240px" height="320px" alt="image de <?= $hero_info->name ?> "><br>

            <span><?= $hero_info->name ?></span><br>
            <span><?= $hero_info->biography->{'first-appearance'} ?></span><br>
            <span><?= $hero_info->biography->publisher ?></span><br>
            <span><?= $hero_info->biography->alignment ?></span><br>


            <!-- hero stat -->
            <div class='global_stats' 
                data-intelligence= "<?= $hero_info->powerstats->intelligence == null ? rand(0,100): $hero_info->powerstats->intelligence ?>"
                data-strength ="<?=$hero_info->powerstats->strength == null ? rand(0,100): $hero_info->powerstats->strength ?>"
                data-speed ="<?=$hero_info->powerstats->speed == null ? rand(0,100): $hero_info->powerstats->speed ?>"
                data-durability ="<?= $hero_info->powerstats->durability == null ? rand(0,100): $hero_info->powerstats->durability ?>"
                data-power ="<?= $hero_info->powerstats->power == null ? rand(0,100): $hero_info->powerstats->power  ?>"
                data-combat ="<?= $hero_info->powerstats->combat == null ? rand(0,100): $hero_info->powerstats->combat ?>"
            >
            </div>
            
            <!--- hero's life -->
            <p><?= $hero_info->connections->{'group-affiliation'} ?></p><br>
            <p><?= $hero_info->connections->relatives ?></p><br>
            <p> work <br> 
                <span>Occupation</span> <br> 
                <span><?= $hero_info->work->occupation ?></span><br>
                <span>Basement</span> <br> 
                <span><?= $hero_info->work->base ?></span>
            </p>






</body>
</html>