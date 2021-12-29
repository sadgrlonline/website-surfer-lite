// this makes sure the URL list is ready to go
(function () {
    generateRandomList();
  })();
  
  function generateRandomList() {
    // here is where you add the URLs you want!!
    var myURLs = [
      "https://sadgrl.online",
      "https://auzziejay.com",
      "https://cinni.net",
      "https://crimson.earth",
      "https://melonking.net"
    ];
    randomizedURLs = [];
    console.log(myURLs);
    var j = 0;
  
    // generates random URLs
    function genRandomList(length, randomizedURLs) {
      while (length--) {
        j = Math.floor(Math.random() * (length + 1));
        randomizedURLs.push(myURLs[j]);
        myURLs.splice(j, 1);
      }
      return randomizedURLs;
    }
  
    genRandomList(5, randomizedURLs);
  }
  
  // adds event listener to the surf button
  (function () {
    var button = document.getElementById("surfButton");
    button.addEventListener("click", function () {
      // surf is what runs after a new list has been generated
      surf();
    });
  })();
  
  function surf() {
    if (randomizedURLs.length > 0) {
      console.log(randomizedURLs.at(-1));
      document.getElementById("viewport").src = randomizedURLs.pop();
    } else {
      generateRandomList();
      surf();
    }
  }
  