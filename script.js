/*------------------- Animated Bat by EJ --------------------*/

window.onload = function(){

    let batSpriteArray = ["face1.png", "face2.png", "face3.png"];

    let batSprite = document.getElementById('bat_sprite');
    //console.log(batSprite);

    let i = 0;

    function animBatSprite() {

        batSprite.style = 'background:url("bat_sprite/'+batSpriteArray[i]+'");';

        if (i >= 2) {
            i = 0;
        } else {
            i++;
        }
        //console.log(i);
    }
    //animBatSprite();

    setInterval(animBatSprite, 500);

}