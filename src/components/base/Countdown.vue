<template>
    <div>
        <section class="countdown">
            <div v-show="!expired" class="timer">
                <div class="box">
                    <div class="spacer"></div>
                    <p class="value">{{ theTime.days }}</p>
                    <p class="label">days</p>
                </div>
                <div class="box">
                    <div class="spacer"></div>
                    <p class="value">{{ theTime.hours }}</p>
                    <p class="label">hours</p>
                </div>
                <div class="box">
                    <div class="spacer"></div>
                    <p class="value">{{ theTime.minutes }}</p>
                    <p class="label">minutes</p>
                </div>
                <div class="box">
                    <div class="spacer"></div>
                    <p class="value">{{ theTime.seconds }}</p>
                    <p class="label">seconds</p>
                </div>
                <p class="text">to meet you</p>
            </div>

            <div v-show="expired" class="expired-timer timer">
                <div class="box">
                    <div class="spacer"></div>
                    <p class="value">It's the great day</p>
                    <p class="label">I'll have you in my arms</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deadline: 'Dec 28, 2017 00:00:00',
            days: 'HI',
            hours: 'TH',
            minutes: 'ER',
            seconds: 'E!',
            expired: false
        }
    },
    computed: {
        theTime() {
            var ctx = this,
                countDownDate = new Date(ctx.deadline).getTime();

            // Countdown loop    
            var x = setInterval(function() {

                // Difference between the 2 dates
                var countDownDate = new Date(ctx.deadline).getTime(),
                    now = new Date().getTime(),
                    diff = countDownDate - now,

                    // Time conversion to days, hours, minutes and seconds
                    tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
                    thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    tseconds = Math.floor((diff % (1000 * 60)) / 1000);

                // Keep 2 digits
                ctx.days = (tdays < 10) ? '0' + tdays : tdays;
                ctx.hours = (thours < 10) ? '0' + thours : thours;
                ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
                ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

                // Check for time expiration
                if (diff < 0) {
                    clearInterval(x);
                    ctx.expired = true;
                }
            }, 1000);

            // Return data
            return {
                days: ctx.days,
                hours: ctx.hours,
                minutes: ctx.minutes,
                seconds: ctx.seconds
            };
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
@import url("https://fonts.googleapis.com/css?family=Graduate|Quicksand:300,400,700");
*, *::before, *::after {
  box-sizing: border-box;
}
.countdown {
    text-align: center;
}

.timer {
    -webkit-perspective: 1000px;
    perspective: 1000px;
}

.timer .box {
    display: inline-block;
    margin: 1rem;
    width: 10rem;
    text-align: center;
    background: #E5989B;
    -moz-transform-style: preserve-3d;
}

.timer .box:nth-child(2) .value {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.timer .box:nth-child(3) .value {
    -webkit-animation-delay: 1.8s;
    animation-delay: 1.8s;
}

.timer .box:nth-child(4) .value {
    -webkit-animation-delay: 1.3s;
    animation-delay: 1.3s;
}

.timer .box:nth-child(5) .value {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}

.timer .box .spacer {
    position: relative;
    content: '';
    display: block;
    height: 20px;
    background: #FFB4A2;
}

.timer .box .spacer::before,
.timer .box .spacer::after {
    content: '';
    position: absolute;
    top: 5px;
    width: 10px;
    height: 10px;
    background: #FFCDB2;
    border-radius: 50%;
}

.timer .box .spacer::before {
    left: .8rem;
}

.timer .box .spacer::after {
    right: .8rem;
}

.timer .box .value {
    position: relative;
    margin: 0;
    padding: 1.2rem 0 2rem;
    font-family: "Graduate", sans-serif;
    font-size: 3em;
    color: rgba(109, 104, 117, 0.6);
    background: #FFB4A2;
    -webkit-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation: wind 4s ease-out alternate infinite;
    animation: wind 4s ease-out alternate infinite;
    box-shadow: 0 15px 10px -10px rgba(181, 131, 141, 0);
}

.timer .box .label {
    margin: 0;
    padding: 1rem;
    color: rgba(255, 255, 255, 0.8);
    background: #E5989B;
}

.timer .box .label::first-letter {
    text-transform: uppercase;
}

.timer .text {
    margin-top: 2rem;
    font-weight: 300;
    font-size: 1.25em;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
    color: #B5838D;
}

.expired-timer .box {
    width: 100%;
}

@media screen and (max-width: 800px) {
    .countdown {
        width: 100%;
        max-width: 25rem;
    }
}

@media screen and (max-width: 480px) {
    .timer .box {
        margin: 1rem .5rem;
        width: 8rem;
    }

    .expired-timer .box {
        width: 18rem;
    }
}

@keyframes wind {
    0% {
        -webkit-transform: rotatex(0);
        transform: rotatex(0);
        box-shadow: 0 15px 10px -10px rgba(181, 131, 141, 0);
        color: rgba(109, 104, 117, 0.6);
        background: #FFB4A2;
    }
    10% {
        -webkit-transform: rotatex(20deg);
        transform: rotatex(20deg);
        box-shadow: 0 15px 10px -10px #ab737e;
        color: rgba(109, 104, 117, 0.45);
        background: #ffc0b1;
    }
}
</style>
