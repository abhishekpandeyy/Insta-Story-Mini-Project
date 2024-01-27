
var arr=[{
    username:"abhishek",dp:"https://images.unsplash.com/photo-1705779234979-9ae065659e99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1682687980918-3c2149a8f110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
},
{
    username:"pandeyy",dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
    ,img:"https://plus.unsplash.com/premium_photo-1682124744308-a1df156dbe1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
}
,{
    username:"",dp:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    ,img:"https://images.unsplash.com/photo-1704402864101-1185cc83f92c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"
},{
    username:"",dp:"https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBvcnRyYWl0fGVufDB8fDB8fHww"
    ,img:"https://images.unsplash.com/photo-1705798543468-5b951da25e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
}
,{
    username:"",dp:"https://images.unsplash.com/photo-1609175858596-198e97287a07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",img:"https://images.unsplash.com/photo-1682685797277-f2bf89b24017?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D"
}
,{
    username:"",dp:"https://images.unsplash.com/photo-1502323703385-c3ea9ace787d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
}
,{
    username:"",dp:"https://images.unsplash.com/photo-1557053908-4793c484d06f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
}
]


var storiya=document.querySelector("#storiya")
arr.forEach(function(elem,idx){
    storiya.innerHTML+=`<div class="story" id=
    ${idx}>
    <img src=${elem.dp} alt="">
    </div>`
    // console.log(elem,i);
})
var story=document.querySelectorAll(".story");
 var win=document.querySelector("#win");
 var reach=document.querySelector("#reach");
story.forEach((val)=>{
    val.addEventListener("click",()=>{
        console.log(val);
        var id=val.getAttribute('id')
        var s=arr[id].img;
        win.style.display='block';
        win.style.backgroundImage=`url(${s})`;
        var count=0;
        setInterval(()=>{
            if(count<=100)
            reach.style.width=`${count}%`;
            count++;
        },30)
        setTimeout(() => {
            win.style.display='none';
            reach.style.width=`0%`;
            val.style.background='grey';
        }, 3000);
    })
})



