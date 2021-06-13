<template>
	<div>
        <h1 class="title">Выберите сложность</h1>
        <div class="difficulty">
                        <div class="difficulty-item">
             <input id="radio-1" type="radio" class="radio-custom" value="easy" name="difficulty" v-model="difficulty"  v-on:change="changeDifficulty">
               <label for="radio-1" class="radio-custom-label">Легкий</label>
              </div>
              <div class="difficulty-item">
            <input id="radio-2" type="radio" class="radio-custom" value="middle" name="difficulty" v-model="difficulty"  v-on:change="changeDifficulty">
            <label for="radio-2" class="radio-custom-label">Средний</label>
              </div>
              <div class="difficulty-item">
            <input id="radio-3" type="radio"  class="radio-custom" value="hard" name="difficulty" v-model="difficulty"  v-on:change="changeDifficulty">
           <label for="radio-3" class="radio-custom-label">Сложный</label>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'game-timer',
        data () {
            return {
                difficulty: "easy",
            }
        },
        methods: {
            changeDifficulty() {
                switch(this.difficulty) {
                    case 'easy':
                         this.$store.commit('changeDifficulty', 1500)
                         break;
                    case 'middle':
                         this.$store.commit('changeDifficulty', 1000)
                         break;
                    case 'hard':
                         this.$store.commit('changeDifficulty', 400)
                         break
                }
            }
        }
	}
</script>

<style lang="scss" scoped>

 .difficulty{
        width: 100%;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .difficulty-item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 30%;
    }
     .title{
        color: #444;
        font-size: 30px;
        text-transform: lowercase;
        letter-spacing: 5px;
        font-weight: 400;
    }
    label{
        width: 60px;
        color: #444;
        font-size: 20px;
        text-transform: lowercase;
        letter-spacing: 5px;
        font-weight: 400;
    }

input[type=radio]:before {
    border: 0px;
    width: 100%;
    height: 2em;
    display: none;
}

input[type='radio']:after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #d1d3d1;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
        cursor: pointer;
    }

    input[type='radio']:checked:after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #2ECC40;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
        cursor: pointer;
    }

            #radio-2:checked:after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #FFDC00;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
        cursor: pointer;
    }

        #radio-3:checked:after {
        width: 20px;
        height: 20px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #FF4136;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
        cursor: pointer;
    }



</style>