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
  { name: "Rabbit", img: "https://example.com/rabbit.jpg" },
  { name: "Hamster", img: "https://example.com/hamster.jpg" },
  { name: "Fox", img: "https://example.com/fox.jpg" },
  { name: "Wolf", img: "https://example.com/wolf.jpg" },
  { name: "Penguin", img: "https://example.com/penguin.jpg" },
  { name: "Seal", img: "https://example.com/seal.jpg" },
  { name: "Otter", img: "https://example.com/otter.jpg" },
  { name: "Duck", img: "https://example.com/duck.jpg" },
  { name: "Swan", img: "https://example.com/swan.jpg" },
  { name: "Horse", img: "https://example.com/horse.jpg" },
  { name: "Kangaroo", img: "https://example.com/kangaroo.jpg" },
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
