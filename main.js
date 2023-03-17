//https://teachablemachine.withgoogle.com/models/0uoANJ6Mx/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0uoANJ6Mx/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }  else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'I can hear - ' +
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+"," + random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('cat');
        img1 = document.getElementById('lion');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('cow');

        if (results[0].label == "Meow"){
            img.src = '360_F_46262687_9Uizc5VRQLYhGWAJBASslq3BFwgeJf3I.jpeg';
            img1.src = 'cartoon-happy-lion-isolated-on-white-background-free-vector.webp';
            img2.src = 'design-bigol-animated-dog-sitting_469988-3.avif';
            img3.src = 'happy-cartoon-cow-isolated-on-white-background-free-vector.webp';            
        }else if (results[0].label == "Roar"){
            img.src = '360_F_46262687_9Uizc5VRQLYhGWAJBASslq3BFwgeJf3I.jpeg';
            img1.src = 'cartoon-happy-lion-isolated-on-white-background-free-vector.webp';
            img2.src = 'design-bigol-animated-dog-sitting_469988-3.avif';
            img3.src = 'happy-cartoon-cow-isolated-on-white-background-free-vector.webp';            
        }else if (results[0].label == "Bark"){
            img.src = '360_F_46262687_9Uizc5VRQLYhGWAJBASslq3BFwgeJf3I.jpeg';
            img1.src = 'cartoon-happy-lion-isolated-on-white-background-free-vector.webp';
            img2.src = 'design-bigol-animated-dog-sitting_469988-3.avif';
            img3.src = 'happy-cartoon-cow-isolated-on-white-background-free-vector.webp';                       
        }else{
            img.src = '360_F_46262687_9Uizc5VRQLYhGWAJBASslq3BFwgeJf3I.jpeg';
            img1.src = 'cartoon-happy-lion-isolated-on-white-background-free-vector.webp';
            img2.src = 'design-bigol-animated-dog-sitting_469988-3.avif';
            img3.src = 'happy-cartoon-cow-isolated-on-white-background-free-vector.webp';                               
        }

    }

}