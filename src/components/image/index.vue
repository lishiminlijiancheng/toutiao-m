<template>
    <div class="image">
        <img ref="img"  :src="imgSrc" id="img"/>
        <div class="toolbar">
            <span @click="close">取消</span>
            <span @click="finish">完成</span>
        </div>
    </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs';
import {uploadFile} from '../../api/profile'
export default {
    name: 'imageIndex',
    props:{
        imgSrc:{
            type:[String,Object],
            require:true
        }
    },

    data() {
        return {
            cropper:null
        };
    },

    mounted() {
       const image = this.$refs.img;
       this.cropper = new Cropper(image, {
       aspectRatio: 1,
       viewMode:1,
       dragMode:1,
       autoCropArea:1,
       cropBoxMovable:false,
       cropBoxResizable:false,
       background:false,
       crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
  },
}); 
    },

    methods: {
        close(){
            this.$emit("close");
        },
       finish(){
            this.cropper.getCroppedCanvas().toBlob(async (blob) => {
            const formData = new FormData();
            // Pass the image file name as the third parameter if necessary.
            formData.append('files', blob);
            const {data}=await uploadFile(formData);
            this.$emit("finish",data.urls[0]);
            this.$emit("close");
            });
        }
        
    },
};
</script>

<style lang="less" scoped>
    .image{
        width: 100%;
        height: 100%;
        background-color: black;
        color: gainsboro;
        #img {
            display: block;
            /* This rule is very important, please don't ignore this */
            max-width: 100%;
            }
        .toolbar{
            background-color: black;
            position: fixed;
            left:0%;
            right:0%;
            bottom: 0%;
            display: flex;
            justify-content: space-between;
            span{
                padding:15px;
            }
        }
    }
</style>