<template>
    <div class="game-menu">
        <div class="playing-menu" v-if="started">
            <game-difficulty/>
        </div>
        <div class="start-menu" v-else>
            <button @click="start">Начать</button>
        </div>
    </div>
</template>

<script>
import GameDifficulty from '@/components/GameMenu/GameDifficulty.vue'
export default {
    name: 'game-menu',
    components: {
        GameDifficulty
    },
    data () {
        return {
            started: false
        }
    },
    methods: {
        start () {
            setTimeout(() => {
                this.restartGame();
            }, 500);
        },
        restartGame () {
            if (!this.$store.state.started) {
                this.started = true;
                window.$gamelights.restart();
            }
        }
    },
    mounted () {
        document.addEventListener('keyup', e => {
            if (e.key.toLowerCase() == 'enter' || e.code.toLowerCase() == 'enter') {
                this.restartGame();
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.game-menu {
    background-color: #ffffff;
    border-radius: 8px;
    min-height: 80px;
    .playing-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        height: 80px;
        flex-wrap: wrap;
    }
    .start-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 80px;
        height: 100%;
        button {
            background-color: #ffffff;
            border: none;
            outline: none;
            padding: 10px 40px;
            border-radius: 25px;
            text-transform: uppercase;
            font-weight: 700;
            cursor: pointer;
            color: #000000;
            border: dashed 2px #000000;
            transition: 200ms;
            &:hover {
                background-color: #ffa500;
            }
        }
    }
}
</style>