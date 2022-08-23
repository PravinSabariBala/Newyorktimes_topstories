const date=new Date()
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let dats = days[date.getDay()] +","+ month[date.getMonth()] + " "+ date.getDate() + "," + date.getFullYear()

const x=document.getElementById('date').innerText=dats;

let k='home'

var temp=0;

function remove(){
    var c_box=document.querySelector('.container-news');
    while(c_box.hasChildNodes()){
        c_box.removeChild(c_box.firstChild);
    }
}

displaycards= async(k)=>{
    remove();
    const response= await fetch(`https://api.nytimes.com/svc/topstories/v2/${k}.json?api-key=ORsg1I4GqcFTlUn2h2yjIfZX7Hywv2x4`);
    let res= await response.json();
    console.log(res);
    res=res['results'];
    localStorage['jsonData']=JSON.stringify(res);
    var c_box=document.querySelector('.container-news');
    temp=res.length;

        for(var i=0; i<res.length; i++){

            const div0=document.createElement('div');
            div0.classList.add('card');
            div0.classList.add('mb-3');
            div0.style="maxWidth:80%";

            const div=document.createElement('div');
            div.classList.add('row');
            div.classList.add('g-0');

            const div1=document.createElement('div');
            div1.classList.add('col-md-8');

            const div3=document.createElement('card-body');
            div3.classList.add('card-body');

            const h5=document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent=k;

            const p1=document.createElement('p');
            p1.classList.add('card-text');
            p1.classList.add('card-text1');
            
            p1.innerText=`${dateformat(res[i]['created_date'])}`; 

            const p2=document.createElement('p');
            p2.classList.add('card-text');
            p2.classList.add('card-text1');
            
            p2.innerText=res[i]['title'];

            const p3=document.createElement('p');
            p3.classList.add('card-text');
            p3.innerText=res[i]['abstract'];

            const p4=document.createElement('a');
            p4.classList.add('card-text');
            p4.classList.add('continue-reading');
            p4.style="cursor:pointer; color:#5aacd0";
            p4.innerText="Continue Reading";
            p4.href=res[i]['url'];

            div1.append(h5);
            
            div1.append(p2);
            div1.append(p1);
            div1.append(p3);
            div1.append(p4);
            div.append(div1);
            

            console.log("hh")

            const div2=document.createElement('div');
            div2.classList.add('col-md-4');


            const img=document.createElement('img');
            img.setAttribute('src',res[i]['multimedia'][0]['url']);
            img.classList.add('img-fluid');
            img.classList.add('rounded-start');
            img.classList.add('img-thumbnail');

            div2.append(img);
            div.append(div2);

            div0.append(div);

            p4.addEventListener('click',function(e){
                continueread(res[i]);
            });

            c_box.appendChild(div0);


            
        } 
        console.log(c_box)
}

displaycards(k);


function dateformat(data){
    const dates=new Date();
    dates.setMonth(data[1])
    data=data.split(/[-,T]/);
    named=date.toLocaleString('en-US', { month: 'long', });
    return `${named} ${data[2]}`
}


const wo=document.getElementById('wo');
wo.addEventListener('click',function(e){
    remove();
    displaycards("world");
});

const po=document.getElementById('po');
po.addEventListener('click',function(e){
    remove();
    displaycards("politics");
});

const ma=document.getElementById('ma');
ma.addEventListener('click',function(e){
    remove();
    displaycards("t-magazine");
});

const te=document.getElementById('te');
te.addEventListener('click',function(e){
    remove();
    displaycards("technology");
});

const sc=document.getElementById('sc');
sc.addEventListener('click',function(e){
    remove();
    displaycards("science");
});

const he=document.getElementById('he');
he.addEventListener('click',function(e){
    remove();
    displaycards("health");
});

const sp=document.getElementById('sp');
sp.addEventListener('click',function(e){
    remove();
    displaycards("sports");
});

const ar=document.getElementById('ar');
ar.addEventListener('click',function(e){
    remove();
    displaycards("arts");
});

const fa=document.getElementById('fa');
fa.addEventListener('click',function(e){
    remove();
    displaycards("fashion");
});

const fo=document.getElementById('fo');
fo.addEventListener('click',function(e){
    remove();
    displaycards("food");
});

const tr=document.getElementById('tr');
tr.addEventListener('click',function(e){
    remove();
    displaycards("travel");
});



