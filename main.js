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
   else{
        console.log(results);
       random_color =  Math.floor(Math.random()*255) + 1;
       color =  Math.floor(Math.random()*255) + 1;
        
        
        document.getElementById("hear").style.color = color;
        document.getElementById("confi").style.color = random_color;
        document.getElementById("hear").innerHTML = results[0].label;
        document.getElementById("confi").innerHTML = results[0].confidence.toFixed(3);
        
        if(results[0].label == "DOG(BARK)"){
           document.getElementById("ani_img").src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"; 

        }
        else if(results[0].label == "CAT(MEOW)"){
            document.getElementById("ani_img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GIOLdWocOpC1GMBWfJUKGCDmmJSSz_BMFg&usqp=CAU"; 
 
         }
        else if(results[0].label == "COW(MOO)"){
            document.getElementById("ani_img").src = "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"; 
 
        }
        else if(results[0].label == "HEN(PAK)"){
            document.getElementById("ani_img").src = "https://www.collinsdictionary.com/images/full/hen_151155842.jpg";
        }
        else{
            document.getElementById("ani_img").src = "https://media.istockphoto.com/vectors/hearing-ear-icon-vector-graphics-vector-id1268414791?k=20&m=1268414791&s=612x612&w=0&h=fi6aoSJcvaVCSe93Pg6J7luQsEZZ2pYCNqmtXxz5gX0=";
        }
         

    }
}


