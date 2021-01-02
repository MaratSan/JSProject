// console.log(document.body.childNodes);


for (let node of document.body.childNodes) {
    if (node.nameName =='#text'){
        continue;
    }
    
    console.log(node);
}