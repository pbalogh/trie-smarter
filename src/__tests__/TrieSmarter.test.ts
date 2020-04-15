import { TrieSmarter } from '../'

describe('TrieSmarter', () => {
    it('should work', () => {
        let ts = new TrieSmarter('foo')
        expect(ts.elements).not.toEqual(['f', 'o', 'o'])
    })
})
