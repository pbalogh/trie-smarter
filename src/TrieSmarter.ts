export class TrieSmarter<T> {
    elements: T[] | string[]
    constructor(sentence: string | Array<T>) {
        this.elements = typeof sentence === 'string' ? sentence.split('') : sentence
    }
}
