<script>
import list from './img/img.json';
export default {
    data() {
        return {
            image:[]
        }
    },
    created() {
        for(let i = 0 ; i < list.length-1 ; i+=3){
            let temp=[];
            for(let j = 0 ; j < 3 ; j++){
                temp.push(list[i+j]);
            }
            this.image.push(temp);
        }
        console.log(this.image[this.image.length-1])
    }
}
</script>

<style lang="scss" scoped>
    .content{
        display: block;
        position: relative;
        height: auto;
        min-height: 100vh;
        color: red;
        padding: 15px;
    }
.showIMG{
    height: 200px;
    width: 200px;
    display: block;
}
.oneRow{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
</style>

<template>

    <div class="content">
        <div class="container">
            <div class="row align-items-center" v-for=" row in image">
                
                <div class="col-4 align-self-center" v-for=" data in row">
        
                        <img class="showIMG" :src="data.url">
                        {{data.title}}
                </div>
            </div>
        </div>
    </div>

</template>
