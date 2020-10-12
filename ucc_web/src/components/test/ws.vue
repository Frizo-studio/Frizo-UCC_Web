<template>
    <div>
        <h1>hello world ws</h1>

        <div>
            <button @click="connect">連線</button>
            <button @click="disconnect">斷開</button>
        </div>

        <div id="response">
            {{responseMsg}}
        </div>

    </div>
</template>

<script>
    import SockJS from  'sockjs-client';
    import  Stomp from 'stompjs';
    import {getAuthorization} from '@/utils/AuthStore'

    export default {
        name: "ws",

        data() {
          return{
              stompClient: null,
              responseMsg: '',
          }
        },

        methods: {
            connect () {
                console.log(getAuthorization())

                let socket = new SockJS("http://127.0.0.1:8080/endpont"); // 建立連線對象
                this.stompClient = Stomp.over(socket); // 獲取 STOMP 子協定客戶端對象



                this.stompClient.connect({"Authorization" : getAuthorization()}, (frame) => {
                    console.log('Connected: ' + frame);
                    this.stompClient.subscribe("/user/topic/response", data => {
                        alert(data)
                    })
                })
            },

            disconnect () {
                this.stompClient.disconnect();
                alert("關閉連線")
            }
        }
    }
</script>

<style scoped>

</style>