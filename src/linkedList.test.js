const { LinkedList } = require('./linkedList')


describe('Test add function LinkedList', () => {
    const node_1 = 'one';
    const node_2 = 'two';
    const node_3 = 'three';
    const node_4 = 'four';
    const node_5 = 'five';
    
    test('Empty node add first', () => {
        expect(LinkedList().addFirst().toArray().length).toEqual(0);
    });
    
    test('Empty node add last', () => {
        expect(LinkedList().addLast().toArray().length).toEqual(0);
    });
    
    test('Added two elements addFirst', () => {
        const resArr = LinkedList().addFirst(node_2).addFirst(node_1).toArray()
        expect(resArr.length).toEqual(2);
        expect(resArr[0]).toEqual('one');
        expect(resArr[1]).toEqual('two');
    });
    
    test('Added two elements addLast', () => {
        const listArr = LinkedList().addFirst(node_3).addFirst(node_4).addFirst(node_5).toArray()
        expect(listArr.length).toEqual(3);
        expect(listArr[0]).toEqual('five');
        expect(listArr[1]).toEqual('four');
        expect(listArr[2]).toEqual('three');
    });
    
    const list2 = LinkedList()
    list2.addFirst(node_3)
    list2.addLast()
    const node_6 = 6;
    const node_7 = 7;
    test('Get first and last  element', () => {
        expect(list2.getFirst()).toEqual('three');
        expect(list2.getLast()).toEqual('three');
        list2.addFirst(node_6)
        expect(list2.getFirst()).toEqual(6);
        list2.addLast(node_7)
        expect(list2.getLast()).toEqual(7);
    });
});

describe('Test remove function LinkedList', () => {
    const one = 'one';
    const two = 'two';
    const three = 'three';
    const four = 'four';
    const five = 'five';
    
    const list11 = LinkedList().addFirst(two).addFirst(one).addLast(three).addLast(four).addLast(five)

    test('Empty List removeFirst', () => {
        try {
            expect(LinkedList().removeFirst())
        } catch(e) {
            expect(e.message).toBe("List don't have elements")
        }
    });
    
    test('Empty List removeLast', () => {
        try {
            expect(LinkedList().removeLast())
        } catch(e) {
            expect(e.message).toBe("List don't have elements")
        }
    });
    
    test('List removeFirst', () => {
        list11.removeFirst()
        expect(list11.getFirst()).toEqual('two');
    });
    
    test('List removeLast', () => {
        list11.removeLast()
        expect(list11.getLast()).toEqual('four');
    });
});

describe('Test length', () => {
    const list3 = LinkedList()
    const list4 = LinkedList().addFirst('a').addLast('b').addLast('c')
    
    test('Empty getLength', () => {
        list3.getLength()
    });
    
    test('List getLength', () => {
        expect(list4.getLength()).toEqual(3);
    });
});

describe('Test clear list', () => {
    
    const List234 = LinkedList().addFirst('a').addLast('b').addLast('c')
    
    test('Length before clear', () => {
        expect( List234.getLength()).toEqual(3);
    });
    
    test('Length after clear', () => {
        List234.clear()
        expect( List234.getLength()).toEqual(0);
    });
    
    test('First element after clear', () => {
        expect(List234.getFirst()).toEqual(null);
    });
    
    test('Last element after clear', () => {
        expect(List234.getLast()).toEqual(null);
    });
});