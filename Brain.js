text = document.querySelector('.SecText');
textload = ()=>{
    setTimeout(()=>{
        text.innerText = "Justin Bieber";
    },0);
    setTimeout(()=>{
        text.innerText = "Arijit Singh";
    },6000);
    setTimeout(()=>{
        text.innerText = "Jubin Nautiyal";
    },12000);
    setTimeout(()=>{
        text.innerText = "Dua Lipa";
    },18000);
    setTimeout(()=>{
        text.innerText = "Dilgit Dosanjh";
    },24000);
}
textload();
setInterval(textload,30000);


Question2 = document.getElementById('Question-2');
Question1 = document.getElementById('Question-1');
temp = null;
t = null;
lang = genere = '';
Array.from(document.getElementsByClassName('Lang')).forEach((e)=>{
    e.classList.remove('fa-check');
})

Array.from(document.getElementsByClassName('Lang')).forEach((e)=>{
    e.addEventListener('click',(ele)=>{
        if(temp==null)
        {
            lang = ele.target.innerText;
            temp = ele; //For storing the element which has been clicked
            ele.target.classList.add('fa-check');
        }
        else
        {
            temp.target.classList.remove('fa-check');
            temp = ele;
            ele.target.classList.add('fa-check');
        }
    })
})

Array.from(document.getElementsByClassName('genere')).forEach((e)=>{
    e.classList.remove('fa-check');
})
Array.from(document.getElementsByClassName('genere')).forEach((f)=>{
    f.addEventListener('click',(el)=>{
        if(t==null)
        {
            genere = el.target.innerText;
            t = el; //For storing the element which has been clicked
            el.target.classList.add('fa-check');
        }
        else
        {
            t.target.classList.remove('fa-check');
            t = el;
            el.target.classList.add('fa-check');
        }
    })
})

//Handling the proceed button
btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    Question1.style.display = 'none';
    Question2.style.display = 'block';
})


//Handling the submit button
btn = document.getElementById('btn-2');
btn.addEventListener('click',()=>{
    if(t==null && temp==null)
    {
        btn.href = "SOURCE.html";
        alert("Please Choose a language and a genere");
    }
    else if(t==null && temp!=null)
    {
        btn.href = "SOURCE.html";
        alert("Please Choose a genere");
    }
    else if(t!=null && temp==null)
    {
        btn.href = "SOURCE.html";
        alert("Please Choose a Language");
    }
    else
    {
        if(lang=='English' && genere=='Romantic')
        {
            btn.href = "EngRom.html";
        }
        else if(lang=='English' && genere=='Pop')
        {
            btn.href = "EngPop.html";
        }
        else if(lang=='Hindi' && genere=='Romantic')
        {
            btn.href = "HinRom.html";
        }
        else if(lang=='Hindi' && genere=='Pop')
        {
            btn.href = "HinPop.html";
        }
        else if(lang=='Punjabi' && genere=='Romantic')
        {
            btn.href = "PunRom.html";
        }
        else
        {
            btn.href = "PunPop.html";
        }
    }
})