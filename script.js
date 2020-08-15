const obj = {
    pich: document.querySelector('#pich'),
    content: document.querySelector('.picture'),
    flover1: document.createElement('img'),
    button: document.createElement('button'),
    text: document.querySelector('h1'),
    funSetAttribute: function () {
        this.flover1.setAttribute('src', 'img/XXL.png');
    },
    funAddClassFlover: function () {
        this.flover1.classList.add('floverDown');
    },
    funAddClassButton: function () {
        this.button.classList.add('button');
    },
    fun: (flover, button) => {
        this.pich.addEventListener('click', function () {
            if (obj.text.innerText == "Нажми на замок") {
                $('#pich').hide();
            }
            $('.picture').append(flover);
            $('h1').text('Это для тебя Вера!💕');
            $('.picture').append(button);
            $('.button').text('Повторить анимашку)');
        });
    },
    fun1: function () {
        this.button.addEventListener('click', function () {
            $('.floverDown').fadeOut(1000);
            $('#pich').show(2500);
        });
    },
    funButton: function () {
        this.button.addEventListener('click', function () {
            if (obj.flover1.style.display == 'none') {
                $('#pich').hide(2500);
                $('.floverDown').show(3000);
                // $('.floverDown').slideUP(1500);
            }
        });
    }
};

obj.funSetAttribute();
obj.funAddClassFlover();
obj.funAddClassButton();
obj.fun(obj.flover1, obj.button);
obj.fun1();
obj.funButton();
