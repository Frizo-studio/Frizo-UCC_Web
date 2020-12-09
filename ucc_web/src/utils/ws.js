import SockJS from  'sockjs-client';
import  Stomp from 'stompjs';
import {authenticated, getAuthorization} from '@/utils/AuthStore'


let stompClient = null;

export function connectToUserNoticeTopic(dataCallback) {

    if (stompClient != null){
        stompClient.disconnect();
    }

    if (authenticated()){
        let socket = new SockJS("http://127.0.0.1:8080/endpont"); // 建立連線對象
        stompClient = Stomp.over(socket); // 獲取 STOMP 子協定客戶端對象
        console.log("my stuck: " + dataCallback);
        stompClient.connect({"Authorization" : getAuthorization()}, (frame) => {
            console.log('Connected: ' + frame);
            stompClient.subscribe("/user/topic/response", data => {
                dataCallback(data.body);
            })
        })
    }
}

export const disconnectToUserNoticeTopic = () => {
    if (stompClient != null){
        stompClient.disconnect();
    }
};