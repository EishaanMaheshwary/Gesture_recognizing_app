result = "";
possibilities = ["Thumbs Up","Ok","Thumbs down"]
possibilities2 = ["👍","👌","👎"]
x = null;
function setup(){
    canvas = createCanvas(400,260);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ihk737_mW/model.json',modelLoaded);
    text(result,15,200);

}
function draw(){
    image(video,0,0,400,300);
    text(result,200,15);
    classifier.classify(video, gotResults);
}
function modelLoaded(){
    console.log("Model Loaded!");
    
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    x= possibilities.indexOf(results[0].label);
    result = possibilities2[x] + " - " + results[0].label;
}
function take_photo(){
    save("selfie.png");
}