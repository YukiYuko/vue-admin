<style lang="less">
.welcome {
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
}

.bus {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    position: relative;
    width: 120px;
    height: 100px;
    margin: 3rem auto 4rem;
    border-radius: 30px 30px 0 0;
    background: #6D6875;
}

.bus::before,
.bus::after {
    content: '';
    position: absolute;
    top: 100%;
    width: 20px;
    height: 20px;
    border-radius: 0 0 2px 2px;
    background: #6D6875;
}

.bus::before {
    left: .5rem;
}

.bus::after {
    right: .5rem;
}

.bus .windows {
    position: absolute;
    top: 20px;
    left: 0.5rem;
    right: 0.5rem;
    height: 35px;
}

.bus .windows::before,
.bus .windows::after {
    content: '';
    position: absolute;
    top: 0;
    width: 48%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
}

.bus .windows::before {
    left: 0;
}

.bus .windows::after {
    right: 0;
}

.bus .lights {
    position: absolute;
    bottom: 10px;
    left: .5rem;
    right: .5rem;
    height: 10px;
}

.bus .lights::before,
.bus .lights::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    background: #FFB4A2;
    border-radius: 50%;
}

.bus .lights::before {
    left: 16px;
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
    -webkit-animation: lighting 6s 2s linear infinite;
    animation: lighting 6s 2s linear infinite;
}

.bus .lights::after {
    right: 16px;
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
    -webkit-animation: lighting2 6s 2s linear infinite;
    animation: lighting2 6s 2s linear infinite;
}

.bus .street {
    position: absolute;
    bottom: -30px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 130px;
    height: 1px;
    background: rgba(181, 131, 141, 0.8);
}

.bus .street::before,
.bus .street::after {
    content: '';
    position: absolute;
    height: 1px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.bus .street::before {
    top: 10px;
    width: 110px;
    background: rgba(181, 131, 141, 0.6);
}

.bus .street::after {
    top: 20px;
    width: 90px;
    background: rgba(181, 131, 141, 0.4);
}

@-webkit-keyframes lighting {
  0% {
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
  }
  4% {
    box-shadow: -16px 0 0 2px white, 14px 0 0 #E5989B;
  }
  8% {
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
  }
  12% {
    box-shadow: -16px 0 0 2px white, 14px 0 0 #E5989B;
  }
  20% {
    box-shadow: -16px 0 0 2px white, 14px 0 0 #E5989B;
  }
  22% {
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
  }
}
@keyframes lighting {
  0% {
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
  }
  4% {
    box-shadow: -16px 0 0 2px white, 14px 0 0 #E5989B;
  }
  8% {
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
  }
  12% {
    box-shadow: -16px 0 0 2px white, 14px 0 0 #E5989B;
  }
  20% {
    box-shadow: -16px 0 0 2px white, 14px 0 0 #E5989B;
  }
  22% {
    box-shadow: -16px 0 0 2px rgba(255, 255, 255, 0.5), 14px 0 0 #E5989B;
  }
}
@-webkit-keyframes lighting2 {
  0% {
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
  }
  4% {
    box-shadow: 16px 0 0 2px white, -14px 0 0 #E5989B;
  }
  8% {
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
  }
  12% {
    box-shadow: 16px 0 0 2px white, -14px 0 0 #E5989B;
  }
  20% {
    box-shadow: 16px 0 0 2px white, -14px 0 0 #E5989B;
  }
  22% {
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
  }
}
@keyframes lighting2 {
  0% {
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
  }
  4% {
    box-shadow: 16px 0 0 2px white, -14px 0 0 #E5989B;
  }
  8% {
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
  }
  12% {
    box-shadow: 16px 0 0 2px white, -14px 0 0 #E5989B;
  }
  20% {
    box-shadow: 16px 0 0 2px white, -14px 0 0 #E5989B;
  }
  22% {
    box-shadow: 16px 0 0 2px rgba(255, 255, 255, 0.5), -14px 0 0 #E5989B;
  }
}


</style>
<template>
    <div class="welcome">
        <div class="bus">
            <div class="windows"></div>
            <div class="lights"></div>
            <div class="street"></div>
        </div>
        <countdown></countdown>
    </div>
</template>

<script>
import Countdown from '@/components/base/Countdown.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        Countdown
    },
    computed: {

    },
    methods: {

    }
}
</script>

