class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}

var dict = {
  // Level-0
  good: new TreeNode("good"),
  bad: new TreeNode("bad"),
  // Level-1
  // Good
  love: new TreeNode("love"),
  joy: new TreeNode("joy"),
  surprise: new TreeNode("surprise"),
  // Bad
  sadness: new TreeNode("sadness"),
  anger: new TreeNode("anger"),
  fear: new TreeNode("fear"),
  // Level-2
  // Love
  peaceful: new TreeNode("peaceful"),
  tenderness: new TreeNode("tenderness"),
  desire: new TreeNode("desire"),
  longing: new TreeNode("longing"),
  affecctionate: new TreeNode("affecctionate"),
  // Joy
  enthralled: new TreeNode("enthralled"),
  elation: new TreeNode("elation"),
  enthusiactic: new TreeNode("enthusiactic"),
  optimistic: new TreeNode("optimistic"),
  proud: new TreeNode("proud"),
  cheerful: new TreeNode("cheerful"),
  happy: new TreeNode("happy"),
  content: new TreeNode("content"),
  // Surprise
  moved: new TreeNode("moved"),
  overcome: new TreeNode("overcome"),
  amazed: new TreeNode("amazed"),
  confused: new TreeNode("confused"),
  stunned: new TreeNode("stunned"),
  // Sadness
  despair: new TreeNode("despair"),
  neglected: new TreeNode("neglected"),
  shameful: new TreeNode("shameful"),
  dissapointed: new TreeNode("dissapointed"),
  sadness: new TreeNode("sadness"),
  suffering: new TreeNode("suffering"),
  // Anger
  disgust: new TreeNode("disgust"),
  envy: new TreeNode("envy"),
  irratible: new TreeNode("irratible"),
  exasperated: new TreeNode("exasperated"),
  rage: new TreeNode("rage"),
  // Fear
  horror: new TreeNode("horror"),
  nervous: new TreeNode("nervous"),
  insecure: new TreeNode("insecure"),
  terror: new TreeNode("terror"),
  scared: new TreeNode("scared"),
};

dict["good"].descendants.push(dict["love"], dict["joy"], dict["surprise"]);
dict["bad"].descendants.push(dict["sadness"], dict["anger"], dict["fear"]);

dict["love"].descendants.push(
  dict["peaceful"],
  dict["tenderness"],
  dict["desire"],
  dict["longing"],
  dict["affecctionate"]
);

dict["joy"].descendants.push(
  dict["enthralled"],
  dict["elation"],
  dict["enthusiactic"],
  dict["optimistic"],
  dict["proud"],
  dict["cheerful"],
  dict["happy"],
  dict["content"]
);
dict["surprise"].descendants.push(
  dict["moved"],
  dict["overcome"],
  dict["amazed"],
  dict["confused"],
  dict["stunned"]
);
dict["sadness"].descendants.push(
  dict["despair"],
  dict["neglected"],
  dict["shameful"],
  dict["dissapointed"],
  dict["sadness"],
  dict["suffering"]
);
dict["anger"].descendants.push(
  dict["disgust"],
  dict["envy"],
  dict["irratible"],
  dict["exasperated"],
  dict["rage"]
);
dict["fear"].descendants.push(
  dict["horror"],
  dict["nervous"],
  dict["insecure"],
  dict["terror"],
  dict["scared"]
);
// Level-3
dict["peaceful"].descendants.push("satisfied", "relieved");
dict["tenderness"].descendants.push(dict["compassionate"], dict["caring"]);
dict["desire"].descendants.push(dict["infatuation"], dict["passion"]);
dict["longing"].descendants.push(dict["attracted"], dict["sentimental"]);
dict["affectionate"].descendants.push(dict["fondness"], dict["romantic"]);
dict["enthralled"].descendants.push(dict["rapture"], dict["enchanted"]);
dict["elation"].descendants.push(dict["jubiliation"], dict["euphoric"]);
dict["enthusiastic"].descendants.push(dict["zeal"], dict["excited"]);
dict["optimistic"].descendants.push(dict["hopeful"], dict["eager"]);

function progress(input) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("style", "text-align: center; margin : 50px");
  document.body.appendChild(newDiv);
  for (let index = 0; index < dict[input].descendants.length; index++) {
    // let container = document.getElementsByClassName("container");

    const emotionStr = dict[input].descendants[index].value;

    let newBtn = document.createElement("button");

    let color1 = Math.min(Math.floor((Math.random() * 1000)/3), 255);
    let color2 = Math.min(Math.floor((Math.random() * 1000)/3), 255);
    let color3 = Math.min(Math.floor((Math.random() * 1000)/3), 255);
    
    newBtn.setAttribute("class", `bg-rgb(${color1}, ${color2}, ${color3}) hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`);
    newBtn.setAttribute("id", emotionStr);
    newBtn.setAttribute("onClick", "progress(this.id)");
    newBtn.innerHTML = emotionStr;
    newDiv.appendChild(newBtn);
  }
}
