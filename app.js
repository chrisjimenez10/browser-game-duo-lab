//----Constants----\\
const instructions = document.querySelector(".instructions");
const consequences = document.querySelector(".consequences");
const img = document.getElementById("myImage");

const input = document.querySelector("input");
const submitButton = document.querySelector("#submit-button");

const op1Button = document.querySelector("#op1-button");
const op2Button = document.querySelector("#op2-button");
const startButton = document.querySelector("#start-button");

// Instructions that represent game flow 
let instructionText = ["- Make your Selection as you Traverse the Forest -",
"- Left (Option 1) or Right (Option 2)? -",
"- Over the hill (Option 1) or through the pond (Option 2)? -",
"- Into the tunnel (Option 1) or through the dense tree path (Option 2)? -", 
"- Through the valley (Option 1) or climb the tree (Option 2)? -",]

//Images
const imageUrls = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EWyVTer4-UrZbqfs6fk_7ea774aTuP1tgg&s",
"https://savemountdiablo.org/wp-content/uploads/2023/12/Krane-2-Sean-Burke-928x522.jpg",
"https://png.pngtree.com/background/20230513/original/pngtree-single-train-track-runs-through-a-thick-forest-with-a-green-picture-image_2504939.jpg",
"https://www.americansouthwest.net/california/photographs700/horseshoe-meadows-road-tree-owens-valley.jpg",
"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fba700e5c-60d9-4908-810e-fe192c03de08_1236x932.jpeg"
];

// img.src = imageUrls[1] - expression to change images by changing its attribute




//Function to update the instructions
let currentIndex = 0; // Variable holding index value after adds +1 inside the event listener to input into updateText()
function updateText(){
    instructions.textContent = instructionText[currentIndex];
}   
updateText();
//Event listener for NEXT button
startButton.addEventListener("click", ()=>{ //We chose to convert NEXT button into a START button and have its only function to start the game with the first instruction that requests user input
    instructions.textContent = instructionText[1]
    consequences.textContent = "";
    img.src = imageUrls[0];
})   
//     if(currentIndex >= instructionText.length){
//             currentIndex = 0;
//     }
//     updateText();
// })
// updateText(); //As soon as browser runs, we are invoking the initial element/instruction of our instructionText array

//Event listener for Option 1 Button - make sure when first instruciotn still there, we get message to click next to begin adventure
    op1Button.addEventListener("click", ()=>{
        if(instructions.textContent === instructionText[0]){
            consequences.textContent = "Click START";
        }else if(instructions.textContent === instructionText[1]){
            consequences.textContent = "You chose Left - the path least taken, way to be courageous!";
            instructions.textContent = instructionText[2] //experiment (we want the instruction to change automatically after user selects an option)
            img.src = imageUrls[1] //With this attribute change we are changing images from our array images
        }else if(instructions.textContent === instructionText[2]){
            consequences.textContent = "You chose Over the hill - careful on that steep ascend!";
            instructions.textContent = instructionText[3] //experiment
            img.src = imageUrls[2]
        }else if(instructions.textContent === instructionText[3]){
            consequences.textContent = "You chose the tunnel - it's dark in here! make sure to use your flashlight";
            instructions.textContent = instructionText[4] //experiment
            img.src = imageUrls[3]
        }else if(instructions.textContent === instructionText[4]){
            consequences.textContent = "You chose the valley - Oh no! the wolf had set an ambush and got you...GAME OVER";
            img.src = imageUrls[4]    
    }
}) 

    op2Button.addEventListener("click", ()=>{
        if(instructions.textContent === instructionText[0]){
            consequences.textContent = "Click START";
        }else if(instructions.textContent === instructionText[1]){
            consequences.textContent = "You chose Right - the path most taken...are you a sheep?";
            instructions.textContent = instructionText[2] //experiment
            img.src = imageUrls[1] 
        }else if(instructions.textContent === instructionText[2]){
            consequences.textContent = "You chose through the pond - you're getting your feet wet and will be uncomfortable for the rest of your journey!";
            instructions.textContent = instructionText[3] //experiment
            img.src = imageUrls[2]
        }else if(instructions.textContent === instructionText[3]){
            consequences.textContent = "You chose the dense tree path - ok, just make sure to leave a crumb trail so you don't get more lost...just not that appetizing for the little critters";
            instructions.textContent = instructionText[4] //experiment
            img.src = imageUrls[3]
        }else if(instructions.textContent === instructionText[4]){
            consequences.textContent = "You chose to climb the tree - good move, you got a better viewpoint for an exit and made your way outside of the forest: You Win!";
            img.src = imageUrls[4]
        }
    })

//Alert Name message + Display current player name on the side
submitButton.addEventListener("click", ()=>{
    alert(`Welcome ${input.value}, enjoy the game!`);
    sideName.textContent = `Current Player: ${input.value}`;
    input.value = "";
})

const sideName = document.querySelector("aside");













