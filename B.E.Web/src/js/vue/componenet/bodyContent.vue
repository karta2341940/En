<script>
import list from './img/img.json';
import cart from './cart.vue';
export default {
    data() {
        return {
            image: []
        }
    },
    components: {
        cart
    },
    created() {
        for (let i = 0; i < list.length - 1; i += 3) {
            let temp = [];
            for (let j = 0; j < 3; j++) {
                temp.push(list[i + j]);
            }
            this.image.push(temp);
        }
        console.log(this.image[this.image.length - 1])
    }
}
</script>

<style lang="scss" scoped>
.content {
    display: block;
    position: relative;
    height: auto;
    min-height: 100vh;
    padding: 15px;
}

.row {
    margin-top: 20px;
}

.showIMG {
    border-radius: 10px;

    img {
        display: flex;
        border-radius: 10px;
        height: fit-content;
        transition: transform 0.5s ease;
    }

    img:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
}

.cusCard {
    padding: 20px;
    height: fit-content;
    border: 1px solid rgb(182, 182, 182);
    border-radius: 10px;
    user-select: none;
}

.fixCube {
    border-radius: 10px;
    overflow: hidden;
    height: fit-content;
    width: fit-content;
    margin-bottom: 20px;
}

.info {
    height: 6em;
    justify-content: space-between;

    .card-title {}
}
</style>

<template>
    <div class="content">
        <div class="container" v-lazy-container="{ selector: 'img' }">
            <div class="row" v-for=" row in image">
                <div class="col-4 showIMG" v-for="data in row">
                    <div class="cusCard">
                        <div class="fixCube">
                            <img class="card-img-top" :data-src="data.url" alt="Card image cap">
                        </div>
                        <div class="info">
                            <div class="row">
                                <h5 class="col-9 card-title">{{ data.title }}</h5>
                                <p class="col-3 card-text" style="text-align: end;">{{ data.price }}</p>
                            </div>
                            <div class="row">
                                <button style="" class="btn btn-light">Just Buy it</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
