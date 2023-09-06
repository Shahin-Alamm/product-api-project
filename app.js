


addEventListener( click, function(){
    const product = document.getElementById ('img');

    fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then(res=> res.json())
    .then( data => {

      const tools = data.data.tools;

        for(i = 0; i<6 && tools.length; i++){
            const tool = tools[i];
            const el = document.createComment('div');
            product.appendChild(el);
            
        }

    })
})