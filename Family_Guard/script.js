const prod = document.getElementById('prod');

const logo = document.getElementById('logo');
const about = document.getElementById('aboutUs');
const blog = document.getElementById('blog');

const type1 = document.getElementById('type1');
const type2 = document.getElementById('type2');

const text = document.getElementById(`text`);

const prodMenu = document.getElementById('prodMenu');

prod.onclick = function(){
    if (logo.classList.contains('out')) {
        logo.classList.add('in');
        logo.classList.remove('out');
    }
    else {
        logo.classList.remove('in');
        logo.classList.add('out');
    }

    if (about.classList.contains('out')) {
        about.classList.add('in');
        about.classList.remove('out');
    }
    else {
        about.classList.remove('in');
        about.classList.add('out');
    }


    if (blog.classList.contains('out')) {
        blog.classList.add('in');
        blog.classList.remove('out');
    }
    else {
        blog.classList.remove('in');
        blog.classList.add('out');
    }


    if(prod.classList.contains('trans'))
    {
        prod.classList.remove('trans');
    }
    else{
        prod.classList.add('trans');
    }


   
    //Menu container
    // if(prodMenu.classList.contains('visibility'))
    // {
    //     prodMenu.classList.remove('visibility');
    // }
    // else{
    //     prodMenu.classList.add('visibility');
    // }

    if (prodMenu.classList.contains('in2')) {
        prodMenu.classList.remove('in2');
        prodMenu.classList.add('out2');
        
    }
    else {
        prodMenu.classList.add('in2');
        prodMenu.classList.remove('out2');
    }



    if (text.classList.contains('out')) {
        text.classList.add('in');
        text.classList.remove('out');
    }
    else {
        text.classList.remove('in');
        text.classList.add('out');
    }


    // if (type1.classList.contains('out2')) {
    //     type1.classList.add('in2');
    //     type1.classList.remove('out2');
    // }
    // else {
    //     type1.classList.remove('in2');
    //     type1.classList.add('out2');
    // }

    // if (type2.classList.contains('out2')) {
    //     type2.classList.add('in2');
    //     type2.classList.remove('out2');
    // }
    // else {
    //     type2.classList.remove('in2');
    //     type2.classList.add('out2');
    // }



}

const buttons = document.getElementsByClassName("slidy-button");

for (let button of buttons) {
    button.addEventListener("click", myFunction);
}

function myFunction(e) {
    e.preventDefault(); 
    const slidyDiv = this.closest('.slidy-div'); // Вземи родителския div

    if (slidyDiv.classList.contains('slidy-div-selected')) {
        slidyDiv.classList.remove('slidy-div-selected');
    } else {
        slidyDiv.classList.add('slidy-div-selected');
    }
}
