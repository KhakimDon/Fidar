<template>
    <div v-if="loading" class="preloader">
      <div class="camera-interface">
        <div class="header">
          <div class="rec-indicator">
            <div class="circle"></div>
            <span>REC</span>
          </div>
          <div class="timestamp">00:00:0{{this.tim }}</div>
        </div>
        <div class="camera-view">
          <div class="bg-white pb-[5px] px-[10px]">
            <img class="h-[50px]" src="../assets/logoke.png" alt="image">
          </div>
        </div>
        <div class="footer">
          <span class="camera-id">CAM 1</span>
          <span class="status">LIVE</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tim: 2,
        loading: true,
      };
    },
    mounted() {
        let a = setInterval(() => {
            this.tim-- 
            if(this.tim == 0){
                clearInterval(a)
            }
        }, 1000);
      // Имитация загрузки данных
      setTimeout(() => {
        this.loading = false;
      }, 5000); // Замените это реальной логикой загрузки
    },
  };
  </script>
  
  <style scoped>
  .preloader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    z-index: 1000;
    overflow: hidden;
  }
  
  .camera-interface {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    padding: 20px;
    position: relative;
    width: 80%;
    max-width: 400px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .header, .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .rec-indicator {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .rec-indicator .circle {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    animation: blink 1s infinite;
  }
  
  .rec-indicator span {
    font-size: 14px;
    font-weight: bold;
  }
  
  .timestamp {
    font-size: 14px;
  }
  
  .camera-view {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .camera {
    width: 100px;
    height: 100px;
  }
  
  .outer-ring {
    fill: none;
    stroke: #444;
    stroke-width: 5;
  }
  
  .inner-ring {
    fill: none;
    stroke: #888;
    stroke-width: 5;
  }
  
  .lens {
    fill: #00f;
  }
  
  .scan-line {
    stroke: #0f0;
    stroke-width: 2;
    animation: scan 1s infinite ease-in-out;
  }
  
  .camera-id {
    font-size: 14px;
    font-weight: bold;
  }
  
  .status {
    font-size: 14px;
    font-weight: bold;
    color: limegreen;
  }
  
  @keyframes rotateCamera {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes scan {
    0%, 100% {
      y1: 5;
      y2: 95;
    }
    50% {
      y1: 30;
      y2: 70;
    }
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  </style>
  