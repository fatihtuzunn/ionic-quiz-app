<template>
   
  
        <div id="container">
          <div v-if="state == 'question'">
            <h1 class="text-xl mb-5">{{ question.question }}</h1>
            <ul>
              <li v-for="(answer,i) in question.answers" :key="i">
                <button class="block border border-black py-2 px-5 mb-3 rounded hover:bg-blue-100 shadow w-full"
                  v-on:click="handleResponse" v-bind:data-id="answer.id">{{ answer.answer }}</button>
              </li>
            </ul>
          </div>
          <div v-if="state == 'answer'">
            <h1 class="text-xl mb-5">{{ question.question }}</h1>
            <ul>
              <li v-for="(answer,i) in question.answers" :key="i">
                <div class="block border border-black py-2 px-5 mb-3 rounded shadow w-full text-center"
                  v-bind:class="{ 'bg-green-700 text-white': answer.correct, 'bg-red-700 text-white': answer.id == selectedAnswer.id && !answer.correct }">
                  {{ answer.answer }}</div>
              </li>
            </ul>
            <div class="text-center">
              <p v-if="selectedAnswer.correct" class="mt-8 text-lg">🎉 Correct, well done! 🎉</p>
              <p v-else class="mt-8 text-lg">Wrong answer, sorry</p>
              <button v-on:click="handleNext"
                class="inline-block mx-auto rounded border border-black py-2 px-5 shadow mt-5 hover:bg-blue-100">Next
                question </button>
            </div>
          </div>
          <div v-if="state == 'results'">
            <h1 class="text-xl mb-5">Congrats, you're done with the quiz</h1>
            <p class="my-5 py-3 border border-black text-2xl text-center">You got {{score}} out of {{ questions.length }}
            </p>
            <p v-if="scorePercentage > 90">You are a true Star Wars connoisseur.</p>
            <p v-else-if="scorePercentage >= 50">You are somewhat of a Star Wars fan...</p>
            <p v-else>You should start watching Star Wars and learn about this awesome universe.</p>
            <div class="text-center">
              <button v-on:click="handleRestart"
                class="inline-block mx-auto rounded border border-black py-2 px-5 shadow mt-10 hover:bg-blue-100">Restart
                the quiz</button>
            </div>
          </div>
        </div>
  
  </template>
  
  
  
  
  <script>
  export default {
    name: 'testCo',
    components: {
      
    },
    props:["test"],
    data() {
      return {
        state: 'question',
        currentQuestion: 0,
        selectedAnswer: 0,
        questions: this.test,
        score: 0,
      }
    },
    mounted() {
      console.log(this.questions);
    },
    computed: {
      question() {
        return this.questions[this.currentQuestion];
      },
      scorePercentage() {
        return this.score * 100 / this.questions.length;
      },
    },
    methods: {
      handleResponse(event) {
        const selected = this.question.answers.find(a => a.id == event.target.dataset.id);
        this.selectedAnswer = selected;
        if (selected.correct) {
          this.score++;
        }
        this.state = 'answer';
      },
      handleNext() {
        this.currentQuestion++;
        if (this.currentQuestion >= this.questions.length) {
          this.state = 'results';
        } else {
          this.state = 'question';
        }
      },
      randomizeOrder() {
        this.questions.map(question => {
          question.answers.sort(() => Math.random() - 0.5)
          question.answers.map((answer, index) => answer.id = index);
        });
        this.questions.sort(() => Math.random() - 0.5);
      },
      handleRestart() {
        this.currentQuestion = 0;
        this.score = 0;
        this.state = 'question';
        this.randomizeOrder();
      },
    },
    created() {
      this.randomizeOrder();
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  