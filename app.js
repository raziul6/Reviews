const reviews = [
  {
    id:1,
    name:"Raziul Islam",
    job:"Web Developer",
    img:"https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-1/c0.14.200.200a/p200x200/173288532_2861692817422995_2692539661963451196_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeET9YghY-Jhj1MnVTbWciiPMUs_05Re6YwxSz_TlF7pjH8MeSnZEHJCyzN0t2RNgK956nWdsfE9DJ-LOvb00ycD&_nc_ohc=V-EmNy7LkwQAX-wnY4E&_nc_ht=scontent.fcgp17-1.fna&oh=973bf752c84c316edb359b71685d7139&oe=61432C7D",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
  },
  {
    id:2,
    name:"Marufa Akter",
    job:"Graphic Designer",
    img:"https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-1/c0.0.200.200a/p200x200/206369767_806342076651124_2663777896415112029_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEHQu0orwFcADfxZM9jThV5HmBg9xnukOQeYGD3Ge6Q5OdthoGoeMSvXGEzByOE4nyrdiLQcMIUhvd_J8L8Uy7e&_nc_ohc=fInNqcuOYLcAX8O3qFS&_nc_ht=scontent.fcgp17-1.fna&oh=b4da687ece2e0e42a2fbd65c1e6ef061&oe=61453538",
    text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking "
  },
  {
    id:3,
    name:"FC Barcelona",
    job:"Football Team",
    img:"https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-1/p148x148/206566108_10160570270614305_4805070023800492330_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_eui2=AeFKiG3KTv6MoXrFNCUzR4pgXWRM0q15okhdZEzSrXmiSIhiHb7SabOlFCaRSxCfLdykZ7EOSbVE15t259u8uQP_&_nc_ohc=AROoUTd8EvgAX8lryZh&_nc_ht=scontent.fcgp17-1.fna&oh=00a8a143e12b0054ea1737fa38441df4&oe=6145D5CD",
    text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected"
  }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  personInfo();
})

function personInfo(){
  const item = reviews[currentItem];
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  personInfo();
})
prevBtn.addEventListener('click', function(){
  currentItem--
  if(currentItem < 0){
    currentItem = reviews.length -1 
  }
  personInfo();
});

randomBtn.addEventListener('click', function(){
  currentItem = randomPersion();
  personInfo();
})

function randomPersion(){
  return Math.floor(Math.random() * reviews.length);
}


