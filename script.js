let container = $('.container');
let main = $('main');
let aside = $('aside');




function contentToCSS(el) {
   let content = el.contents()[0]
   let style = Object.fromEntries([content.data.split(":")])
   return style;
}





// take content and put it in css

function updateCSS(el) {
    let newStyles = contentToCSS(el);
    console.dir(newStyles)
    $(el).css(newStyles)
}


init()

function init() {
    updateCSS(container);
    updateCSS(main);
    updateCSS(aside);
    console.log("jest")
}

document.querySelector('.container').addEventListener('input', init)




// update css on change


// style dom