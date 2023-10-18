let allBoxes = document.querySelectorAll(".grid div");
let resetButton = document.querySelector("button");


let turn = 0;
let allTimeTurns = 0;
let arrayForO = [];
let arrayForX = [];



let xxxx = localStorage.getItem("xsavedScore");
let xsavedScore = Number(xxxx);
let yyyy = localStorage.getItem("osavedScore");
let osavedScore = Number(yyyy);

let xScore=  xsavedScore || 0;
let oScore = osavedScore || 0;


let xScoreH1= document.querySelector(".xscore");
let oScoreH1= document.querySelector(".oscore");

xScoreH1.textContent = ` ${xsavedScore}`;
oScoreH1.textContent = ` ${osavedScore}`;

let winFactors = [ 
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]


];



allBoxes.forEach((box) => {
    
    box.onclick = function(){
        if(turn === 0){
            let tostring = box.classList;
            if(arrayForX.includes(Number(tostring[0].charAt(tostring[0].length-1))) ||arrayForO.includes(Number(tostring[0].charAt(tostring[0].length-1)))){
                console.log("this block is taken");
            }else{
                box.innerHTML = "<h1>O<h1>";
                turn = 1;
                allTimeTurns = allTimeTurns+1;
                // console.log(box);
                
                // console.log(tostring[0]);
                arrayForO.push(Number(tostring[0].charAt(tostring[0].length-1)));
                arrayForO.sort((a, b) => a - b);
                console.log(arrayForO);
                if(allTimeTurns> 4){
                    winForO();
                };
            };
            
            

        } else{
            let tostring = box.classList;

            if (arrayForO.includes(Number(tostring[0].charAt(tostring[0].length-1))) || arrayForX.includes(Number(tostring[0].charAt(tostring[0].length-1)))){
                console.log("this block is taken");
                
            }else{
                box.innerHTML = "<h1>X</h1>";
                turn = 0;
                allTimeTurns = allTimeTurns+1;
                // console.log(box);
                
                // console.log(tostring[0]);
                arrayForX.push(Number(tostring[0].charAt(tostring[0].length-1)));
                arrayForX.sort((a, b) => a - b);
                console.log(arrayForX);
                if(allTimeTurns> 4){
                    winForX();
                };
            };
        
            

        };
        if (arrayForO.length + arrayForX.length === 9){
            setBoxTodef();

        }
        function winForO(){
            let threePoint;
            winFactors.forEach((sen)=> { 
                threePoint = 0;
                    
                sen.forEach(k => { 
                    for(i of arrayForO){ 
                        if ( k === i){
                            threePoint = threePoint + 1;
                            
                            if (threePoint === 3){
                                console.log("O hat gewonnen")
                                oScore = oScore + 1;
                                oScoreH1.textContent = ` ${oScore}`;
                                
                                setBoxTodef();
                                
                                

                            };
                        };
                    
                }});
            
            });  
        };


        function winForX(){
            let threePoint;
            winFactors.forEach((sen)=> { 
                threePoint = 0;
                    
                sen.forEach(k => { 
                    for(i of arrayForX){ 
                        if ( k === i){
                            threePoint = threePoint + 1;
                            
                            if (threePoint === 3){
                                console.log("X hat gewonnen");
                                xScore = xScore + 1;
                                xScoreH1.textContent = ` ${xScore}`;
                                setBoxTodef();
                                
                                
                            };
                        };
                    
                }});
            
            });  
        };

        function setBoxTodef(){
            localStorage.setItem("xsavedScore", xScore.toString());
            localStorage.setItem("osavedScore", oScore.toString());
            setTimeout(() => {
                arrayForO = [];
                arrayForX = [];
                allBoxes.forEach((box) => {
                box.textContent = "";
                });
              }, 800);
            
        }
    };
    
        
});
resetButton.onclick = function(){
    xScore = 0;
    oScore = 0;
    osavedScore = 0;
    xsavedScore = 0;
    localStorage.clear();
    xScoreH1.textContent = 0;
    oScoreH1.textContent = 0;

};
