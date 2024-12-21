//Question 1 
//did it with bubble sort because it is simple
function sortArray(arr1){
    for(let i=1 ; i < arr1.length ;i++){
        for(let j=0 ; j < arr1.length-1 ; j++){
            if(arr1[j] > arr1[j+1]){
                let temp = arr1[j]
                arr1[j] = arr1[j+1]
                arr1[j+1] = temp
            }
        }
    }
    return arr1
}
const a = [1,54,36,3476,8,876,9,869,86]
// console.log('q1 array: ' + sortArray(a))

//question 2
function sharedValues(arrF1, arr2){
    const shared = []
    let flag = true
    for(let i=0 ; i < arrF1.length ; i++){
        for(let j=0 ; j<arr2.length; j++){
            if(arrF1[i] === arr2[j]){
                for(let n=0; n<shared.length;n++){
                    if(arr2[j] === shared[n]){
                        flag = flase
                    }
                }
                if(flag){
                    shared.push(arrF1[i])
                }
                flag = true
            }
        }
    }
    return shared
}


// console.log('q2 shared: ' + sharedValues([1,421,432,531,42], [1,532,5,25,26,42]))

//question 3
function avgMat (mat){
    let countItems = 0
    let counter = 0
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
          counter += mat[row][col]
          countItems ++;
        }
    }
    return (counter / countItems).toFixed(3) ;
}

// console.log('q3: ' + avgMat([[1,4,56],[431,7546,543,7864],[6,7,8,4,43]]))

//question 4
function getNumOut(arrNumbers, num1){
    const helpArr = []
    let count = 0
    for(let i=0; i<arrNumbers.length;i++){
        if(arrNumbers[i] === num1){
            while(i<arrNumbers.length-1){
                helpArr.push(arrNumbers.pop())
            }
            arrNumbers.pop()
            count++
            while(helpArr.length > 0){
                arrNumbers.push(helpArr.pop())
            }
        }
    }
    return count
}

const arrq4 = [1,5432,664,1,657,1,764,9,1]
// console.log('q4: count: ' + getNumOut(arrq4, 1) + ' arr: ' + arrq4)

//Arrow function:
//question 1
let isBiggerThen5 = (str) => str.length > 5 ;
// console.log('q1: ' + isBiggerThen5('123456'))

//question 2
let isSame = str1 => {
    if(str1.charAt(0) === str1.charAt(str1.length-1)){
        console.log('q2 str is same')
    }else{
        console.log('q2 str is not the same')
    }
}
// console.log(isSame('hidorgoyeah'))

//question 3
let isUpper = strUp => strUp.charAt(strUp.length-1) === strUp.charAt(strUp.length-1).toUpperCase()
// console.log('q3: ' + isUpper('jgioewrH'))
// console.log('q3: ' + isUpper('jgioewr'))

//Map/forEach
//question 1
const isThree = [3,3363,36,52,44,89,87,95]
let flag = true
console.log('q1: ')
isThree.forEach(function (value, index){
    if(value%3 === 0){
        console.log(value + ' ,' + index)
        flag = false
    }
})
if(flag){
    console.log('The array is not divisible by 3')
}

//question 2
const arrLetters = ['g','e','h','R','E','J']
const checkLetters = arrLetters.map(function(value){
    if(value === value.toUpperCase()){
        return 'U'
    }else{
        return 'L'
    }
})
console.log('q2: ' + checkLetters)

//question 3
const indexZogi = ['a','b','c','d','f']
indexZogi.forEach(function(el,index){
    if(index%2 === 0){
        indexZogi[index] = index
    }
})
console.log('q3: ' + indexZogi)

//question 4
const ages = [42,65,6,7,8,15,63,89,44]
const over18 = ages.filter(el => el > 18)
console.log('q4: ' + over18)

//question 5
const numbersInArr = [2,4,1,2,7,2,8]
const arrWithout3 = numbersInArr.filter((el,index) => index!=3)
console.log('q5: ' + arrWithout3)

//question 6
const names6 = ['DorG','Ben','Shlomi','Idan']
function addName(name1){
    names6.push(name1)
}
addName('testName')
console.log('q6: ' + names6)
//i didnt fully understanded question 6

//question 7
const names1 = ['Dor','Shay','Yossi']
const names2 = ['DorG','Ben','Shlomi','Idan']
const names = [...names1,...names2]
console.log('q7: ' + names)