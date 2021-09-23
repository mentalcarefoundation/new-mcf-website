<template>
    <div class="modal-container" :class="{open:openModal }">
        <div class="overlay"></div>
        <div class="modal-card">
            <div class="modal">
                <img src="~/assets/img/close.svg"  class="cancel" alt="close-icon" @click="closeModal">
                <div class="modal-header">
                    <h1>Mental Health Awareness Quiz</h1>
                </div>
                <div class="modal-content">
                    <div class="colored"></div>
                    <div class="content-container">
                        <div class="main-content">
                            <div class="question">{{questions[index].question}}</div>
                            <radio-btn :check-answer="checkAnswer" :clear-btn="answerCheck"></radio-btn>
                        </div>
                        <div class="footer">{{index+1}}/{{questions.length}}</div>
                        <div class="answer-container" :class="{open:answerCheck }">
                            <div class="answer-overlay"></div>
                            <div class="answer-card" :class="{wrong: (feedback !== questions[index].answer)}">
                                <div v-if="endQuiz" class="answer-modal">
                                    <h5>YOU ARE DONE!</h5>
                                    <div class="details">Your score is {{correct}}/{{questions.length}}</div>
                                </div>
                                <div v-else class="answer-modal">
                                    <h5 v-if="feedback === questions[index].answer">Correct!</h5>
                                    <h5 v-else>Wrong!</h5>
                                    <div class="details">{{questions[index].details}}</div>
                                    <div @click="nextQuestion">
                                        <btn colorless>
                                            <span>Next</span>
                                        </btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import RadioBtn from '~/components/RadioBtn.vue'
import Btn from '~/components/Button.vue'

export default {  
    components: {
        RadioBtn,
        Btn
    },
    props: {
        openModal: Boolean,
        questions: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            index: 0,
            correct: 0,
            endQuiz: false,
            feedback: 'false',
            answerCheck: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close', false)
            this.index = 0;
            this.correct = 0;
            this.endQuiz = false;
            this.answerCheck = false;
        },
        checkAnswer(a) {
            this.feedback = a
            this.answerCheck = true
            if(a === this.questions[this.index].answer){
                this.correct++;
            }
        },
        nextQuestion() {
            if(this.index+1 === this.questions.length){
                this.endQuiz = true
            }
            else {
                this.answerCheck = false;
                this.index ++;
            }
        }
    }
}
</script>

<style scoped>
    .modal-container, .answer-container {
        display: none;
        justify-content: center;
        align-items: center;
        height: 100%;
        top: 0;
        right: 0;
    }
    .modal-container {
        position: fixed;
        width: 100vw;
        z-index: 100;
    }
    .open {
        display: flex;
    }
    .overlay, .answer-overlay {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .overlay {
        position: fixed;
        background-color:rgba(0, 0, 0, 0.33);
    }
    .modal-card, .answer-card {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .modal-card {
        top: 100px;
        width: 840px;
    }
    .modal, .answer-modal {
        opacity: 1;
    }
    .modal {
      display: flex;
      flex-direction: column;
      background: #FAFAFA;
    }
    .cancel {
        width: 35px;
        height: 35px;
		position: absolute;
		right: 23px;
		top: 23px;
        cursor: pointer;;
        outline: none;
    }
    .modal-header {
        padding: 20px 0;
        background-color: var(--color-blue-dark);
        text-align: center;
    }
    .modal-header h1 {
        font-family: Arial, sans-serif;
        font-weight: 700;
        font-size: var(--text-36);
        width: 80%;
        line-height: 41px;
        color: var(--color-white);
    }
    .modal-content {
        position: relative;
    }
    .modal-content .colored {
        width: 70%;
        background-color: var(--color-pink-light);
        height: 30px;
    }
    .content-container {
        padding: 40px 75px;
        min-height: 350px;
        box-sizing: border-box;     
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .footer {
        margin: 0 auto;
        background-color: var(--color-blue-dark);
        font-size: var(--text-16);
        color: var(--color-white);
        padding: 5px 10px;
    }
    .main-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .question {
        width: 400px;
        font-family: Verdana;
        font-size: var(--text-18);
    }    
    .answer-container {
        position: absolute;
        width: 100%;
        z-index: 200;
    }
    .answer-overlay {
        position: absolute;
        background-color:rgba(255, 255, 255, 0.79);
    }
    .answer-card {
        top: 55px;
        width: 400px;
        background: var(--color-pink-dark);
    }
    .wrong {
        background-color: var(--color-blue-dark);
    }
    .answer-modal {
        padding: 24px 44px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        line-height: 24px;
    }
    .answer-modal h5 {
        font-family: Arial, sans-serif;
        font-weight: 700;
        font-size: var(--text-16);
        color: var(--color-white);
        margin-bottom: 5px;
    }
    .answer-modal .details {
        font-family: Verdana, sans-serif;
        font-size: var(--text-16);
        color: var(--color-white);
        margin-bottom: 30px;
        text-align: center;
    }

@media (max-width: 1024px) {
    .modal-card {
        width: 80%;
        top: auto;
    }
    .modal-header h1{
        font-size: var(--text-24);
    }
    .answer-card {
        width: 80%;
    }
    .answer-modal {
        padding: 15px;
    }
}
@media (max-width: 840px) {
    .main-content {
        padding: 20px 5%;
        flex-wrap: wrap;
    }
    .question {
        margin-bottom: 20px;
    }
    .content-container {
        padding: 20px;
        min-height: 400px;
    }
    .cancel {
        width: 25px;
        height: 25px;
    }
}
</style>
