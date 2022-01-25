(function main(boxSizes, totalLength){
  
const boxes = boxSizes.map(boxSize => ({count: 0, size: boxSize}));
const print = (boxes) => boxes.filter(box => box.count > 0).map(box => box.size).join(', ')

const configure = (remainSpace, boxes) => {
  if(remainSpace === 0) {
    console.log(print(boxes));
    return;
  }
  
  const possibleBoxes = boxes.filter(box => box.size <= remainSpace)
  if(!possibleBoxes.length) {
    console.log(print(boxes));
    return;
  }
  
  possibleBoxes.forEach((possibleBox, i) => {    
    const cloneCopyOfpossibleBoxes = JSON.parse(JSON.stringify(possibleBoxes));
    cloneCopyOfpossibleBoxes[i].count++;
    
    configure(remainSpace - possibleBox.size, cloneCopyOfpossibleBoxes);
  });
}
configure(totalLength, boxes);
}([100, 50, 120, 75], 250))