
document.addEventListener("keydown", function (event) {
    play(event.key);
    pressEffect(event.key);
});

document.addEventListener("keyup", function (event) {
    pressEffectRemove(event.key);
});

document.querySelectorAll(".drum").forEach(element => {
    element.addEventListener("click", function () {
        var pressed = this.innerHTML;
        pressEffect(pressed);
        play(pressed);
        setTimeout(() => {
            pressEffectRemove(pressed);
        }, 100);

    });
});


function play(pressed) {
    {
        switch (pressed) {
            case "w": var sound1 = new Audio("sounds/tom-1.mp3");
                sound1.play();
                break;
            case "s": var sound2 = new Audio("sounds/tom-2.mp3");
                sound2.play();
                break;
            case "a": var sound3 = new Audio("sounds/tom-3.mp3");
                sound3.play();
                break;

            case "d": var sound4 = new Audio("sounds/tom-4.mp3");
                sound4.play();
                break;

            case "j": var sound5 = new Audio("sounds/snare.mp3");
                sound5.play();
                break;
            case "k": var sound6 = new Audio("sounds/crash.mp3");
                sound6.play();
                break;
            case "l": var sound7 = new Audio("sounds/kick-bass.mp3");
                sound7.play();
                break;

            default:
                break;
        }

    }
};

function pressEffect(key) {
    var pressed = document.querySelector("." + key);
    if (pressed) {
        pressed.classList.add("pressed");
    }
}

function pressEffectRemove(key) {
    var pressed = document.querySelector("." + key);
    if (pressed) {
        pressed.classList.remove("pressed");
    }
}