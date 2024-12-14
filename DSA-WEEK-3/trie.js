class Node {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root
        for(let char of word) {
            if(!(char in node.children)) {
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    print(node = this.root, word = '') {
        if(node.isEndOfWord) {
            console.log(word)
        }
        for(let char in node.children) {
            this.print(node.children[char], word + char)
        }
    }

    search(word) {
        let node = this.root
        for(let char of word) {
            if(!(char in node.children)) {
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startWith(prefix) {
        let node = this.root
        for(let char of prefix) {
            if(!(char in node.children)) {
                return false
            }
            node = node.children[char]
        }
        return true
    }

    autoComplete(prefix) {
        let node = this.root
        for(let char of prefix) {
            if(!node.children[char]) return []
            node = node.children[char]
        }
        let words = []
        this.findAllWords(node, prefix, words)
        console.log(words)
    }

    findAllWords(node, prefix, words) {
        if(node.isEndOfWord) words.push(prefix)
        for(let char in node.children) {
            this.findAllWords(node.children[char], prefix + char, words)
        }
    }

    longestCommonPrefix(words) {
        for(let word of words) {
            this.insert(word)
        }

        let prefix =''
        let node = this.root

        while(Object.keys(node.children).length === 1 && !node.isEndOfWord) {
            let char = Object.keys(node.children)[0]
            prefix += char
            node = node.children[char]
        }
        console.log(prefix)
    }

    delete(word) {
        if(!this.search(word)) return null
        
        return this.deleteWord(this.root, word, 0)
    }

    deleteWord(node, word, index) {
        if(!node) {
            return null
        }

        if(index === word.length) {
            if(node.isEndOfWord) node.isEndOfWord = false
            if(Object.keys(node.children).length === 0) return false
            return node
        }

        let char = word[index]
        node.children[char] = this.deleteWord(node.children[char], word, index + 1)

        if(Object.keys(node.children).length === 0 && !node.isEndOfWord) return false
        return node
    }

}

const trie = new Trie()

trie.insert('apple')
trie.insert('app')
trie.insert('apricot')
trie.insert('battle')
trie.insert('bat')

trie.print()

// console.log(trie.search('app'))
// console.log(trie.startWith('apcp'))

// trie.autoComplete('ba')

// trie.longestCommonPrefix(['hell', 'helicopter', 'hello'])

trie.delete('battle')
trie.print()

