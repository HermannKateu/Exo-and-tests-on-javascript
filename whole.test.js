import { matchInputWithRandom, daysLeftToChristmas, clock, add, extractingSpecifiedIndex, deleteRepeatedCharacter, filteringArray,
    equalObejct, division, multiplication, largestEvenIntegerOfArray, longestStringOfArray, stringVerification,
    volumeOfCylinder, sumOfCubes,deleteObjectProperty } from "./whole.js";
test('removing the object property',()=>{
    expect(deleteObjectProperty({
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    },'name')).toStrictEqual({
        sclass : "VI",
        rollno : 12 
    })
})
test('Taking a number and giving the sum of cubes from 1 to the number', () => {
  expect(sumOfCubes(3)).toBe(36)
});
    

test('Volume of a cylinder', () => {
    expect(volumeOfCylinder(2,3)).toBe(37.6992)
});


test('determining if a string is in lower case', () => {
    expect(stringVerification('hello')).toBe(true)
})


test('Return the longest string of an array', () => {
    expect(longestStringOfArray(['aa','a','aaa','aaaa'])).toBe('aaaa')
})


test('The largest even number', () => {
    expect(largestEvenIntegerOfArray([1,2,3,23,84,43,2,2,20])).toBe(84)
})


describe('The multiplication of two numbers',() =>{
    test("When x or y is 0", ()=>{
        expect(multiplication(2,0)).toBe('Any multiplication by 0 is "0"')
    })
    test('when x and y are different from 0', ()=>{
        expect(multiplication(2,3)).toBe(6)
    })
})


describe('The division of two numbers', ()=>{
    test('When x and y are 0', ()=>{
        expect(division(4,0)).toBe('Impossible to divide a number by "0"')
    })
    test('When x is 0',()=>{
        expect(division(0,9)).toBe('The result is "0"')
    })
    test('When x and y are different from 0',()=>{
        expect(division(6,3)).toBe(2)
    })
});


describe('Guest if an input number is same as random number',()=>{
    test('When the two matches',()=>{
        jest.spyOn(global.Math, 'random').mockReturnValue(3);
        expect(matchInputWithRandom(31)).toBe('GOOD WORK!!!!!!!')
    })
    test("When it doesn't matches",()=>{
        expect(matchInputWithRandom(4)).toBe('NOT MATCHED')
    })
})


describe('Check if two objects have equal properties values',()=>{
    test("when the properties are equal",()=>{
        expect(equalObejct({name: "Aflac",
        numLegs: 2
        },
        {name: "Aflac",
        numLegs: 2,})).toEqual(true)
    })
    test('When their length are not Equal',()=>{
        expect(equalObejct({surname: "Aflac",
        numLegs: 1
        },
        {name: "Aflac",
        surname:'Paul',
        numLegs: 2})).toBe(false)
    })
    test("when the properties are all unequal",()=>{
        expect(equalObejct({surname: "Aflac",
        numLegs: 1
        },
        {name: "Aflac",
        numLegs: 2})).toEqual(false)
    })
    test('When both values and properties are not equal',()=>{
        expect(equalObejct({surname: "Aflac",
        numLegs: 1
        },
        {name: "Aflac",
        numLegs: 2,})).toEqual(false)
    })
})


describe('filtered and array',()=>{
    test("Let's try to filter",()=>{
        expect(filteringArray([1,2,3,4,5],1,2)).toEqual([3,4,5])
    })
})


describe("Deletion of duplicated values",()=>{
    test("Let's try on",()=>{
        expect(deleteRepeatedCharacter('aabbccdd')).toEqual('abcd')
    })
})
   

describe("Extracting values from a specifyed indexes",()=>{
    test("Let go on",()=>{
        expect(extractingSpecifiedIndex([1,0,0,0,2,3,4],[0,4,5,6])).toEqual([1,2,3,4])
    })
})   
    


describe('Days left before and after christmas',()=>{
    test('Days to next cristmass',()=>{
        jest.spyOn(Math, "ceil").mockReturnValue(26133576480)
        expect(daysLeftToChristmas(2022)).toBe(`Reamaning 26133576480 days for the next Christmas`)
    })
    test('Days passed since the entered year',()=>{
        jest.spyOn(Math, "ceil").mockReturnValue(573484412498)
        expect(daysLeftToChristmas(2003)).toBe(`573484412498 days had already passed since 2003`)
    })
})
  
     
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


describe("it concern the testing of a promise",()=>{
    test("Here try with the reject",()=>{
        expect(add()).rejects.toMatch('Must enter the two parameters')
    })
    test("here is when we have numbers",()=>{
       return expect(add(2,7)).resolves.toBe(9)
    })
})  
   