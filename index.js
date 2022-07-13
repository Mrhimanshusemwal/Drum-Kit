
var x= document.querySelectorAll(".drum").length;

document.querySelector("h1").addEventListener("click",function()
                                              {
                                                  
                                                  var aud = new Audio("sounds/funny-intro-if-u-know-what-i-mean-46386-2.mp3")
                                                  aud.play();
                                                  var x = this.innerHTML;
                                                  x.classList.add("pressed");
                                                  setTimeout(function ()
                                                  {
                                                      var x = document.querySelector("."+key);
                                                      x.classList.remove("pressed");
                                                  
                                                  },100);
                                              }
                                             )

for(var i = 0;i<x;i++)
{
   
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
    var pop = this.innerHTML;
   sound(pop);
   animate(pop);

});

}

document.addEventListener("keydown" , function()
{
    sound(event.key);
    animate(event.key);
});





function sound(key)
{

    switch (key) {
        case "w":
            var a = new Audio("sounds/tom-1.mp3");
            a.play();
            break;

            case "a":
                var a = new Audio("sounds/tom-2.mp3");
                a.play();
                break;

                case "s":
                    var a = new Audio("sounds/tom-3.mp3");
                    a.play();
                    break;

                    case "d":
                        var a = new Audio("sounds/tom-4.mp3");
                        a.play();
                        break;
                    case "j":
            var a = new Audio("sounds/snare.mp3");
            a.play();
            break;
            case "k":
                var a = new Audio("sounds/crash.mp3");
                a.play();
                break;
                case "l":
                    var a = new Audio("sounds/kick-bass.mp3");
                    a.play();
                    break;
    
        default:
            break;
    }
}
function animate(key)
{
    var x = document.querySelector("."+key);
    x.classList.add("pressed");
    setTimeout(function ()
    {
        var x = document.querySelector("."+key);
        x.classList.remove("pressed");
    
    },100);
}
