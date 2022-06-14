img = "";
status ="";
objects =[];

function preload(){
    img = loadImage('dog_cat.jpg')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecing Object";
}

function draw () {
    image(img, 0, 0, 640, 420);

     if(status !="")
     {
         for (i = 0; i < objects.length; i++)
         {
             document.getElementById("status").innerHTML = "status : Objects Detected";

             fill("#FF0000");
             persent = floor(object[i].lable + " "+ percent + "%", object[i].x, object[i].y);
             text(objects[i].lable + " "+ persent + "%", object[i].x, object[i].y);
             noFill();
             stroke("#FF0000");
             rect(object[i].x + 15, object[i].y + 15, object[i].width, object[i].height);
         }
     }
    fill("#FF0000");
    text("Dog", 45, 75);
    nofill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill('#FF0000');
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}