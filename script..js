let btn=document.getElementById('btn')
addEventListener('click',function(){
    let btn = this.document.getElementById('money').Value;
    let numUSD = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency: "GBP"
    })
      document.getElementById('output').innerHTML = "The newly formatted currency number" +
       numUSD.format(m)
})


console.log('btn')






// let b = document.getElementById('btn');
// b.addEventListener('click',function(){
//     let b = document.getElementById('money').Value;
//     let numUSD= new Intl.NumberFormat('en-GB',{
//         style:'currency',
//         currency:'GBP'
//     })
//      document.getElementById('output').innerHTML=
//      'The newly formatted currency number is ' +
//        numUSD.format(m);
// })


