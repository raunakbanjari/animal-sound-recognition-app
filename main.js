function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Wn_krs5jT/model.json" , modelLoaded);

}
function modelLoaded(){
    console.log("Model is ready");
    classifier.classify(gotResults);
}
function gotResults(error , results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
    }
}


