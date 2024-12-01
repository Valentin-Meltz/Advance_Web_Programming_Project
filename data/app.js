const javaPackagesApp = {
    data() {
        return {
            mainHeading: 'Discover Canada',
            packages,
            isFlipped: false,
            learnMoreUrl: 'https://docs.oracle.com/javase/tutorial/',
            userInput: 'Default',
            index: 0
        }
    },
    methods: {
        move(change) {
            if (this.packages[this.index + change]) {
                this.index += change;
                this.isFlipped = false;
            }
        }
    }
}

const app = Vue.createApp(javaPackagesApp).mount("#app");