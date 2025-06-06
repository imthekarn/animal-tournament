const animals = [
  { name: "Cat", img: "https://media.tenor.com/RHL93QuyhVsAAAAM/%E0%B8%AD%E0%B8%B4%E0%B9%82%E0%B8%A1%E0%B8%88%E0%B8%B4%E0%B9%84%E0%B8%AD%E0%B9%82%E0%B8%9F%E0%B8%99.gif" },
  { name: "Dog", img: "https://media3.giphy.com/media/Z5xk7fGO5FjjTElnpT/200w.gif?cid=6c09b952m78b7c6msygb5ciuzbqxb7dk23fi6t87nfljfhcl&ep=v1_gifs_search&rid=200w.gif&ct=g" },
  { name: "Panda", img: "https://media.tenor.com/wdtlFe7MhkkAAAAM/small-panda-xiongmaoren.gif" },
  { name: "Koala", img: "https://media.tenor.com/5Y3-s1xOlU4AAAAM/%E5%94%94%E6%92%9A%E4%BF%82%E5%91%80-%E6%A8%B9%E7%86%8A.gifhttps://media.tenor.com/5Y3-s1xOlU4AAAAM/%E5%94%94%E6%92%9A%E4%BF%82%E5%91%80-%E6%A8%B9%E7%86%8A.gif" },
  { name: "Tiger", img: "https://media.tenor.com/Nr43LEFJdNMAAAAM/tiger-sitting-tiger.gif" },
  { name: "Lion", img: "https://media.tenor.com/rJHoYggUbKUAAAAM/wacky-silly.gif" },
  { name: "Elephant", img: "https://media.tenor.com/fzAKv5liQL4AAAAM/dancing-elephant.gif" },
  { name: "Giraffe", img: "https://media.tenor.com/HuN1WvB62toAAAAM/tongue-giraffe.gif" },
  { name: "Zebra", img: "https://media2.giphy.com/media/aCApF8cx7smhq/200w.gif?cid=6c09b952tpnvsr33biqyj28btpicjusfrp1590i4ne0go0ok&ep=v1_gifs_search&rid=200w.gif&ct=g" },
  { name: "Rabbit", img: "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyc2xjNnZycnRrcjFmampjaGhuNnFmY3Y5eW1qaTFrcnkzMno3bDhlbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3xqh9FxO2PpiU/source.gif" },
  { name: "Hamster", img: "https://media.tenor.com/9RCIDZjkhBsAAAAM/hamster-meme.gif" },
  { name: "Fox", img: "https://media.tenor.com/FG1ejcojHq0AAAAM/fox.gif" },
  { name: "Wolf", img: "https://media.tenor.com/oDuqCdpj53AAAAAM/ugandan-wolf-meme.gif" },
  { name: "Penguin", img: "https://media.tenor.com/SQ1N_QKllQQAAAAM/penguin-slap.gif" },
  { name: "Seal", img: "https://media.tenor.com/66bWb1AeSfAAAAAM/seal_waitin-seal.gif" },
  { name: "Otter", img: "https://media.tenor.com/fD4qHF3dOY4AAAAM/my-honest.gif" },
  { name: "Duck", img: "https://media.tenor.com/3ZYRtxMK4WcAAAAM/lils-silly-duck-lilsduck.gif" },
  { name: "Swan", img: "https://media.tenor.com/esl8CVvEqM0AAAAM/dance-swan.gif" },
  { name: "Horse", img: "https://media.tenor.com/dJNzGImD_poAAAAM/horse.gif" },
  { name: "Kangaroo", img: "https://media.tenor.com/tthpbjj0P58AAAAM/kangaroo.gif" },
  { name: "Maddog", img: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.15752-9/455329845_1218976425787443_2397745016102897398_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=G8ROZF2tTbQQ7kNvwFIdcw7&_nc_oc=AdkkceMI4lg6GpEkL1yjpO-hLwrPyGqu1N9dffwkId2c9uWI0cDic1vShcfz0VpPBoSZ-uxlxvGJAZQHaNf2KnID&_nc_zt=23&_nc_ht=scontent.fbkk9-2.fna&oh=03_Q7cD2gFFs6J0ACJu9TURYa3Ed1_8Iy0SMAeBzShw-k-74mY-Yg&oe=6869D9BB" },
  { name: "Madcat", img: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.15752-9/454719525_850486170381842_2767967905793127463_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=VQhZE9NKIiYQ7kNvwHSAUlV&_nc_oc=AdnJ7bpZYXEVg-FS7aKe7YrYW_DvAA2uDfIXc0esUk50ZP5TYNfV-AXYn1VQwAOnZqCxOrEJLBNGO_7b2qJj1tS6&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&oh=03_Q7cD2gGqeYCEROlVdDLqwg8FcTzWfZon-cpn5DQM9ZTywLA8Sw&oe=6869F3BE" },
  { name: "Puppy", img: "https://sdmntpreastus.oaiusercontent.com/files/00000000-4c18-61f9-a9ea-21fdabd1c10e/raw?se=2025-06-06T06%3A58%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=d463f2e8-6932-5eb2-b67d-ded6a3a278ef&skoid=5cab1ff4-c20d-41dc-babb-df0c2cc21dd4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-06T02%3A13%3A35Z&ske=2025-06-07T02%3A13%3A35Z&sks=b&skv=2024-08-04&sig=nBNPCdwXBAFka0G00boomk8GILap5j6bdgxF1%2BybyZM%3D" },
  { name: "Kitten", img: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.15752-9/455329845_364329530072457_2795455768518642782_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=yV8db6NeJs4Q7kNvwH3dZMg&_nc_oc=Adno9XphtNNpWZRVE-jw_wm371OqLlAY8sOcmONFDMyuU-x5wrPzvobHw0K4T8ZruO0IA2XcGttS3smIM64XRwJP&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&oh=03_Q7cD2gH5wtNsnYYKuWAgLyQURb7xKuNPLnHjHj-PmQUbTzwmZA&oe=6869DAB4" },
];

let queue = shuffle([...animals]);
let nextRound = [];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

let currentIndex = 0;
let round = 1;

function showPair() {
  if (currentIndex >= queue.length) {
    if (queue.length === 1) {
      document.getElementById('tournament').innerHTML = `<h2>🏆 Winner: ${queue[0].name} 🏆</h2><img src="${queue[0].img}" style="width:300px;">`;
      return;
    }
    queue = [...nextRound];
    nextRound = [];
    currentIndex = 0;
    round++;
    document.getElementById('round-info').textContent = `Round ${round}`;
  }

  const left = queue[currentIndex];
  const right = queue[currentIndex + 1];

  document.getElementById("left-img").src = left.img;
  document.getElementById("right-img").src = right.img;
  document.getElementById("left-name").textContent = left.name;
  document.getElementById("right-name").textContent = right.name;
}

function choose(winner) {
  const chosen = winner === "left" ? queue[currentIndex] : queue[currentIndex + 1];
  nextRound.push(chosen);
  currentIndex += 2;
  showPair();
}

showPair();
