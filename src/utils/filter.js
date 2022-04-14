import Vue from 'vue'
import random from './random'

const config = { 
    bannerLength:5,
    bannerUri:'http://xs.momen.vip/img/banner/',
    bookcoverLength:100,
    bookcoverUri:'http://xs.momen.vip/img/bookcover/'
 }


//随机banner
Vue.filter('randomBanner',function(banner){
    if(banner == 'default-banner.jpg'){
        let num = random(1,config.bannerLength).toString();
        let theNum =  num[1] ? num : '0' + num;
	    return `${config.bannerUri}banner${theNum}.jpg`
    }else{
        return `${config.bannerUri}${banner}`
    }
});

//随机小说封面
// 传true默认封面开启随机,false不随机
Vue.filter('randomBookcover',function(bookcover,israndom){
    if(bookcover){
        return bookcover
    }else{
        return 'https://p2.music.126.net/hC0q2dGbOWHVfg4nkhIXPg==/109951165374881177.jpg?param=512y512'
        let num = random(1,config.bookcoverLength).toString();
        let theNum =  num[1] ? num : '0' + num;
        return `${config.bookcoverUri}${theNum}.jpg`
    }
    // if(bookcover == 'default-bookcover.jpg'&&israndom){
    //     let num = random(1,config.bookcoverLength).toString();
    //     let theNum =  num[1] ? num : '0' + num;
	//     return `${config.bookcoverUri}${theNum}.jpg`
    // }else{
    //     return `${config.bookcoverUri}${bookcover}`
    // }
});
