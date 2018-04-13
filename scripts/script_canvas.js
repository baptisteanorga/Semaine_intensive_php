$global_stats=document.querySelector('.global_stats')

//COLORS
let red= '#EB5757'
let orange= '#F2994A'
let yellow= '#F2C94C'
let green= '#6FCF97'
let blue_light= '#56CCF2'
let blue_dark='#2F80ED'


// Get context + variables
const cercle_canvas = document.querySelector('.cercle_canvas')
cercle_canvas.width = 400
cercle_canvas.height = 500
let ctx = cercle_canvas.getContext("2d")


let hero_0 = $global_stats.dataset.name_0
let hero_1 = $global_stats.dataset.name_1

let ratio = (Math.PI/100)
let intelligence_0 = $global_stats.dataset.intelligence_0
let strength_0 = $global_stats.dataset.strength_0
let speed_0 =$global_stats.dataset.speed_0
let durability_0 = $global_stats.dataset.durability_0
let power_0 = $global_stats.dataset.power_0
let combat_0 = $global_stats.dataset.combat_0


let intelligence_1 = $global_stats.dataset.intelligence_1
let strength_1 = $global_stats.dataset.strength_1
let speed_1 =$global_stats.dataset.speed_1
let durability_1 = $global_stats.dataset.durability_1
let power_1 = $global_stats.dataset.power_1
let combat_1 = $global_stats.dataset.combat_1

// Drawline function
let drawLine = (ctx, startX, startY, endX, endY, colorStroke) => {
    ctx.beginPath()
    ctx.moveTo(startX,startY)
    ctx.lineTo(endX,endY)
    ctx.strokeStyle = colorStroke
    ctx.stroke()
    
}
// Draw circle function
let drawArc = (ctx, centerX, centerY, radius, startAngle, endAngle, lineWidth, colorArc, clock) => {
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, clock)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = colorArc
    ctx.stroke()
}


// DATAS => Variables
let drawPie = () =>{
drawLine(ctx,300,300,100,300,"black");
drawArc(ctx, 200,300,100,0, ratio*intelligence_1, 4, red)
drawArc(ctx, 200,300,90, 0, ratio*strength_1, 4, orange)
drawArc(ctx, 200,300,80, 0, ratio*speed_1, 4, yellow)
drawArc(ctx, 200,300,70, 0, ratio*durability_1, 4, green)
drawArc(ctx, 200,300,60, 0, ratio*power_1, 4, blue_light)
drawArc(ctx, 200,300,50, 0, ratio*combat_1, 4, blue_dark)

// DATAS => stallion
drawArc(ctx, 200,300,100,0, Math.PI, 1, red)
drawArc(ctx, 200,300,90, 0, Math.PI, 1, orange)
drawArc(ctx, 200,300,80, 0, Math.PI, 1, yellow)
drawArc(ctx, 200,300,70, 0, Math.PI, 1, green)
drawArc(ctx, 200,300,60, 0, Math.PI, 1, blue_light)
drawArc(ctx, 200,300,50, 0, Math.PI, 1, blue_dark)
}

drawPie()

// DATAS => Variables
let drawPie2 = () =>{
drawLine(ctx,300,200,100,200,"black");
drawArc(ctx, 200,200,100,0, -(ratio*intelligence_0)    , 4, red,'false')
drawArc(ctx, 200,200,90, 0, -(ratio*strength_0)    , 4, orange,'false')
drawArc(ctx, 200,200,80, 0, -(ratio*speed_0)     , 4, yellow,'false')
drawArc(ctx, 200,200,70, 0, -(ratio*durability_0)     , 4, green,'false')
drawArc(ctx, 200,200,60, 0, -(ratio*power_0)  , 4, blue_light,'false')
drawArc(ctx, 200,200,50, 0, -(ratio*combat_0), 4, blue_dark,'false')

// DATA2S => stallion
drawArc(ctx, 200,200,100,0, Math.PI, 1, red,'false')
drawArc(ctx, 200,200,90, 0, Math.PI, 1, orange,'false')
drawArc(ctx, 200,200,80, 0, Math.PI, 1, yellow,'false')
drawArc(ctx, 200,200,70, 0, Math.PI, 1, green,'false')
drawArc(ctx, 200,200,60, 0, Math.PI, 1, blue_light,'false')
drawArc(ctx, 200,200,50, 0, Math.PI, 1, blue_dark,'false')
}
drawPie2()


// Radial chart
let myChart = new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {  
      labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
      datasets: [
        //  For each hero define color stats
        {
          label: hero_0,
          fill: true,
          backgroundColor: "rgba(184, 24, 24, 0.5)",
          borderColor: "#B81818",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(184, 24, 24, 0.6)",
          data: [intelligence_0, strength_0, speed_0, durability_0, power_0, combat_0]
        }, {
          label: hero_1,
          fill: true,
          backgroundColor: "rgba(46, 67, 140, 0.8)",
          borderColor: "#2E438C",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(46, 67, 140, 0.4)",
    
          data: [intelligence_1, strength_1, speed_1, durability_1, power_1, combat_1]
        }
      ]
    },

    // Color option

    options: {

    legend : {
            display: true,
            position: "top",
            padding:20,
        },
    title: {
            display: true,
            text: 'Stats of the players',
            fontColor : '#fff',
            padding:10,
        },
    scale: {
        gridLines : {
                color : '#fff',
            },
        scaleLabel:{
                display:false,
            },
        ticks: {
            display:true,
            backdropColor:"#333333",
            backdropPaddingX:1,
            backdropPaddingY:1,
            }, 
        pointLabels : {
                fontColor:"#fff",
                },
        angleLines :{
                display:false,
                }    
        },
     
    }

})
