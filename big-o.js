//only ever 3 rods
//rods do not have a set number of disks
//proportion of disks is irrelevant only that they're all different sizes

//rods will be as tall as the number of disks
//disks and the absence thereof will be represented by integers
//console.logs will convert these numbers into strings of concatenated spaces or hyphens

//in this version the end rod is arbitrary, but cannot be the original rod

//BRAINSTORM:
// move top of row 1 over by one
// move smallest disk to an arbitrary rod if the current disk is not smaller

//arguments: move was a success, current top disk rodA, rodB, rodC. 
//current disk r


const rods = [
    [],
    [],
    []
]

function towerOfHanoi(numDisks){
    //initialize Rod A, B, and C
    for (let i=0; i<numDisks; i++){
        rods[0].push(i+1)
        rods[1].push(0)
        rods[2].push(0)
    }

    //try a move

    function printRods(){
        //print for each level
        for (let i=0; i<numDisks; i++) {
            let renderA = ''
            let renderB = ''
            let renderC = ''
            //render disks / blanks on rod
            for (let j=0; j<numDisks; j++) {
                renderA = (j < rods[0][i]) ? (renderA + '-') : (renderA + ' ')
                renderB = (j < rods[1][i]) ? (renderB + '-') : (renderB + ' ')
                renderC = (j < rods[2][i]) ? (renderC + '-') : (renderC + ' ')
            }
            console.log(renderA, renderB, renderC)
        }
    }
}

function moveTower(disk, source, destination, temp){
    if (disk === 0 ) {
        
    }
}

//arguments rodA, rodB, rodC, move sucessful, 

// Step 1 : Shift first disk from 'A' to 'B'. Step 2 : Shift second disk from 'A' to 'C'. Step 3 : Shift first disk from 'B' to 'C'.

// The pattern here is : Shift 'n-1' disks from 'A' to 'B'. Shift last disk from 'A' to 'C'. Shift 'n-1' disks from 'B' to 'C'.

//a > c
//a > b
//c > b
//a > c
//b > a
//b > c
//a > c

//

