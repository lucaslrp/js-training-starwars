

const LIST = [
    {
        id: 1,
        nome: 'Master Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3po',
        avatar: 'images/c3po.png'
    },

]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Lucas',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`The character ${userName} got a like`)
        },

        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },

        search()  {

            if (this.searchName === ''){
                return alert('Search term is required')
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName
            })

            if (result.length <= 0){
                alert('No results found')
            } else {
                this.characters = result
            }
        }
    }
})

