const {sumOfCubes} = require("./whole");
test('Taking a number and giving the sum of cubes from 1 to the number', () => {
  expect(sumOfCubes(3)).toBe(36)
});
     
const student = require("./whole");
test('deletion of items', () => {
    let student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    };
  expect(student).toEqual({
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
});
    delete student.rollno;
  expect(student).toEqual({
    name : "David Rayy",
    sclass : "VI"
    })
});

const {volumeOfCylinder}=require('./whole')
test('Volume of a cylinder', () => {
    expect(volumeOfCylinder(2,3)).toBe(37.6992)
});

const {determiner} = require('./whole')
test('determining if a string is in lower case', () => {
    expect(determiner('hello')).toBe(true)
})

const {longestString} = require('./whole')
test('Return the longest string of an array', () => {
    expect(longestString(['aa','a','aaa','aaaa'])).toBe('aaaa')
})

const {largestInt}= require('./whole')
test('The largest even number', () => {
    expect(largestInt([1,2,3,23,84,43,2,2,20])).toBe(84)
})

const {multiplication}= require("./whole")
describe('The multiplication of two numbers',() =>{
    test("When x or y is 0", ()=>{
        expect(multiplication(2,0)).toBe('Any multiplication by 0 is "0"')
    })
    test('when x and y are different from 0', ()=>{
        expect(multiplication(2,3)).toBe(6)
    })
    test('When x and y are not numbers', ()=>{
        expect(multiplication()).toBe(`Expected number but {x} and {y} given`)
    })
})

const {division}= require("./whole")
describe('The division of two numbers', ()=>{
    test('When x and y are 0', ()=>{
        expect(division(0,0)).toBe('Impossible to divide a number by "0"')
    })
    test('When x is 0',()=>{
        expect(division(0,9)).toBe('The result is "0"')
    })
    test('When x and y are different from 0',()=>{
        expect(division(6,3)).toBe(2)
    })
});

const {guesting}=require("./whole")
describe('Guest if an input number is same as random number',()=>{
    test('When the two matches',()=>{
        jest.spyOn(global.Math, 'random').mockReturnValue(3);
        expect(guesting(31)).toBe('GOOD WORK!!!!!!!')
    })
    test("When it doesn't matches",()=>{
        expect(guesting(4)).toBe('NOT MATCHED')
    })
})

const {comparism}=require("./whole")
describe('Check if two object have equal properties',()=>{
    test("when the prperties are equal",()=>{
        expect(comparism({name: "Aflac",
        numLegs: 2
        },
        {name: "Aflaca",
        numLegs: 2,})).toBe(true)
    })
    test("when the prperties are all unequal",()=>{
        expect(comparism({name: "Afla",
        numLegs: 1
        },
        {name: "Aflac",
        numLegs: 2,})).toBe(false)
    })
})

const{filtered}= require("./whole")
describe('filtered and array',()=>{
    test("Let's try to filter",()=>{
        expect(filtered([1,2,3,4,5],1,2)).toEqual([3,4,5])
    })
})

const {deleteCharacter}=require("./whole")
    describe("Deletion of duplicated values",()=>{
        test("Let's try on",()=>{
            expect(deleteCharacter('aabbccdd')).toEqual('abcd')
        })
    })
   
const {extract}=require("./whole")
    describe("Extracting values from a specifyed indexes",()=>{
        test("Let go on",()=>{
            expect(extract([1,0,0,0,2,3,4],[0,4,5,6])).toEqual([1,2,3,4])
        })
    })   
    

    const {christMas}=require("./whole")
    describe('Days left before and after christmas',()=>
    {
        test('Days to next cristmass',()=>{
            jest.spyOn(Math, "ceil").mockReturnValue(26133576480)
            expect(christMas(2022)).toBe(`Reamaning 26133576480 days for the next Christmas`)
        })
        test('Days passed since the entered year',()=>{
            jest.spyOn(Math, "ceil").mockReturnValue(573484412498)
            expect(christMas(2003)).toBe(`573484412498 days had already passed since 2003`)
        })
})
  
     
const { clock } = require("./whole")

describe("Timing the clock",()=>{
    
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    
    test("Let's first use the fake timer",()=>{
        clock()
        expect(setInterval).toHaveBeenCalledTimes(1)
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        jest.advanceTimersByTime(1000)
        expect(setInterval).toHaveBeenCalledTimes(2)
    })
})

   
