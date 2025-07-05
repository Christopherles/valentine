*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --dark-color: #000;
}

body {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--dark-color);
  overflow: hidden;
  perspective: 1000px;
}
.text {
    z-index: 999;
    position: absolute;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;
    animation:  pulseText 1.5s infinite alternate ease-in-out 3s;
  }
  
  
  @keyframes pulseText {
    0% {
      text-shadow: 0 0 5px #ffffff88, 0 0 10px #ffffff66, 0 0 15px #ffffff44;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      text-shadow: 0 0 8px #ffffffaa, 0 0 15px #ffffff88, 0 0 20px #ffffff66;
      transform: translate(-50%, -50%) scale(1.05);
    }
  }
  
  .wrapper {
    height: 200px;
    width: 300px;
    background-color: #E66A80;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 0;
    margin: 20px auto;
}

.lid {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-right: 150px solid transparent;
    border-bottom: 100px solid transparent;
    border-left: 150px solid transparent;
    transform-origin: top;
    transition: transform 0.4s ease-in-out;
}

.lid.one {
    border-top: 100px solid #F28DA8;
    transform: rotateX(0deg);
    z-index: 3;
}

.lid.two {
    border-top: 100px solid #E66A80;
    transform: rotateX(90deg);
    z-index: 1;
}

.envelope {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-top: 100px solid transparent;
    border-right: 150px solid #FFD3DA;
    border-bottom: 100px solid #FFD3DA;
    border-left: 150px solid #FFC0CB;
    z-index: 3;
}

.letter {
    position: absolute;
    top: 0;
    width: 80%;
    height: 80%;
    background-color: #FFF5F7;
    border-radius: 15px;
    z-index: 2;
    transition: 0.5s;
    transform: translateY(0);
}

.letter p {
    text-align: center;
    font-size: 24px;
    margin-top: 30px;
    color: #D43F5E;
    font-weight: bold;
}

.buttons {
    margin-top: 20px;
}

button {
    background-color: #D43F5E;
    color: white;
    font-size: 16px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    margin: 5px;
}

button:hover {
    background-color: #B52E4C;
}


.open .lid.one {
    transform: rotateX(90deg);
    transition-delay: 0s;
}

.open .lid.two {
    transform: rotateX(180deg);
    transition-delay: 0.25s;
}

.open .letter {
    transform: translateY(-50px);
    transition-delay: 0.5s;
}

  
.night {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  filter: blur(0.1vmin);
  background-image: radial-gradient(
      ellipse at top,
      transparent 0%,
      var(--dark-color)
    ),
    radial-gradient(
      ellipse at bottom,
      var(--dark-color),
      rgba(145, 233, 255, 0.2)
    ),
    repeating-linear-gradient(
      220deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
    ),
    repeating-linear-gradient(
      189deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
    ),
    repeating-linear-gradient(
      148deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 19px,
      transparent 19px,
      transparent 22px
    ),
    linear-gradient(90deg, rgb(0, 255, 250), rgb(240, 240, 240));
}

.flowers {
  position: relative;
  transform: scale(0.9);
}

.flower {
  position: absolute;
  bottom: 10vmin;
  transform-origin: bottom center;
  z-index: 10;
  --fl-speed: 0.8s;
}
.flower--1 {
  -webkit-animation: moving-flower-1 4s linear infinite;
  animation: moving-flower-1 4s linear infinite;
}
.flower--1 .flower__line {
  height: 40vmin;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.flower--1 .flower__line__leaf--1 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 1.6s backwards;
  animation: blooming-leaf-right var(--fl-speed) 1.6s backwards;
}
.flower--1 .flower__line__leaf--2 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 1.4s backwards;
  animation: blooming-leaf-right var(--fl-speed) 1.4s backwards;
}
.flower--1 .flower__line__leaf--3 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 1.2s backwards;
  animation: blooming-leaf-left var(--fl-speed) 1.2s backwards;
}
.flower--1 .flower__line__leaf--4 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 1s backwards;
  animation: blooming-leaf-left var(--fl-speed) 1s backwards;
}
.flower--1 .flower__line__leaf--5 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 1.8s backwards;
  animation: blooming-leaf-right var(--fl-speed) 1.8s backwards;
}
.flower--1 .flower__line__leaf--6 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 2s backwards;
  animation: blooming-leaf-left var(--fl-speed) 2s backwards;
}
.flower--2 {
  left: 50%;
  transform: rotate(20deg);
  -webkit-animation: moving-flower-2 4s linear infinite;
  animation: moving-flower-2 4s linear infinite;
}
.flower--2 .flower__line {
  height: 40vmin;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.flower--2 .flower__line__leaf--1 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 1.9s backwards;
  animation: blooming-leaf-right var(--fl-speed) 1.9s backwards;
}
.flower--2 .flower__line__leaf--2 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 1.7s backwards;
  animation: blooming-leaf-right var(--fl-speed) 1.7s backwards;
}
.flower--2 .flower__line__leaf--3 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 1.5s backwards;
  animation: blooming-leaf-left var(--fl-speed) 1.5s backwards;
}
.flower--2 .flower__line__leaf--4 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 1.3s backwards;
  animation: blooming-leaf-left var(--fl-speed) 1.3s backwards;
}
.flower--3 {
  left: 50%;
  transform: rotate(-15deg);
  -webkit-animation: moving-flower-3 4s linear infinite;
  animation: moving-flower-3 4s linear infinite;
}
.flower--3 .flower__line {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
.flower--3 .flower__line__leaf--1 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 2.5s backwards;
  animation: blooming-leaf-right var(--fl-speed) 2.5s backwards;
}
.flower--3 .flower__line__leaf--2 {
  -webkit-animation: blooming-leaf-right var(--fl-speed) 2.3s backwards;
  animation: blooming-leaf-right var(--fl-speed) 2.3s backwards;
}
.flower--3 .flower__line__leaf--3 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 2.1s backwards;
  animation: blooming-leaf-left var(--fl-speed) 2.1s backwards;
}
.flower--3 .flower__line__leaf--4 {
  -webkit-animation: blooming-leaf-left var(--fl-speed) 1.9s backwards;
  animation: blooming-leaf-left var(--fl-speed) 1.9s backwards;
}
.flower__leafs {
  position: relative;
  -webkit-animation: blooming-flower 2s backwards;
  animation: blooming-flower 2s backwards;
}
.flower__leafs--1 {
  -webkit-animation-delay: 1.1s;
  animation-delay: 1.1s;
}
.flower__leafs--2 {
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
}
.flower__leafs--3 {
  -webkit-animation-delay: 1.7s;
  animation-delay: 1.7s;
}
.flower__leafs::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -100%);
  width: 8vmin;
  height: 8vmin;
  background-color: #e73030;
  filter: blur(10vmin);
}
.flower__leaf {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 8vmin;
  height: 11vmin;
  border-radius: 51% 49% 47% 53%/44% 45% 55% 69%;
  background-color: #e73030;
  background-image: linear-gradient(to top, #ec1010, #e73030);
  transform-origin: bottom center;
  opacity: 0.9;
  box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
}
.flower__leaf--1 {
  transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
}
.flower__leaf--2 {
  transform: translate(-50%, -4%) rotateX(40deg);
}
.flower__leaf--3 {
  transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
}
.flower__leaf--4 {
  width: 8vmin;
  height: 8vmin;
  transform-origin: bottom left;
  border-radius: 4vmin 10vmin 4vmin 4vmin;
  transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
  background-image: linear-gradient(to top, #ec1010, #e73030);
  z-index: 1;
  opacity: 0.8;
}
.flower__white-circle {
  position: absolute;
  left: -3.5vmin;
  top: -3vmin;
  width: 9vmin;
  height: 4vmin;
  border-radius: 50%;
  background-color: #fff;
}
.flower__white-circle::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border-radius: inherit;
  background-image: repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      67.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      112.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      112.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      22.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      22.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      157.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      67.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    repeating-linear-gradient(
      67.5deg,
      rgba(0, 0, 0, 0.03) 0px,
      rgba(0, 0, 0, 0.03) 1px,
      transparent 1px,
      transparent 12px
    ),
    linear-gradient(90deg, rgb(255, 235, 18), rgb(255, 206, 0));
}
.flower__line {
  height: 40vmin;
  width: 1.5vmin;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.2),
      transparent,
      rgba(255, 255, 255, 0.2)
    ),
    linear-gradient(to top, transparent 10%, #147a33, #38a559);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  -webkit-animation: grow-flower-tree 4s backwards;
  animation: grow-flower-tree 4s backwards;
}
.flower__line__leaf {
  --w: 7vmin;
  --h: calc(var(--w) + 2vmin);
  position: absolute;
  top: 20%;
  left: 90%;
  width: var(--w);
  height: var(--h);
  border-top-right-radius: var(--h);
  border-bottom-left-radius: var(--h);
  background-image: linear-gradient(to top, #147a33, #38a559);
}
.flower__line__leaf--1 {
  transform: rotate(70deg) rotateY(30deg);
}
.flower__line__leaf--2 {
  top: 45%;
  transform: rotate(70deg) rotateY(30deg);
}
.flower__line__leaf--3,
.flower__line__leaf--4,
.flower__line__leaf--6 {
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--h);
  border-bottom-right-radius: var(--h);
  left: -460%;
  top: 12%;
  transform: rotate(-70deg) rotateY(30deg);
}
.flower__line__leaf--4 {
  top: 40%;
}

.flower__line__leaf--5 {
  top: 0;
  transform-origin: left;
  transform: rotate(70deg) rotateY(30deg) scale(0.6);
}
.flower__line__leaf--6 {
  top: -2%;
  left: -450%;
  transform-origin: right;
  transform: rotate(-70deg) rotateY(30deg) scale(0.6);
}
.flower__light {
  position: absolute;
  bottom: 0vmin;
  width: 1vmin;
  height: 1vmin;
  background-color: rgb(255, 251, 0);
  border-radius: 50%;
  filter: blur(0.2vmin);
  -webkit-animation: light-ans 4s linear infinite backwards;
  animation: light-ans 4s linear infinite backwards;
}
.flower__light:nth-child(odd) {
  background-color: #23f0ff;
}
.flower__light--1 {
  left: -2vmin;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.flower__light--2 {
  left: 3vmin;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.flower__light--3 {
  left: -6vmin;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.flower__light--4 {
  left: 6vmin;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
.flower__light--5 {
  left: -1vmin;
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
}
.flower__light--6 {
  left: -4vmin;
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}
.flower__light--7 {
  left: 3vmin;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.flower__light--8 {
  left: -6vmin;
  -webkit-animation-delay: 3.5s;
  animation-delay: 3.5s;
}
.flower__grass {
  --c: #159faa;
  --line-w: 1.5vmin;
  position: absolute;
  bottom: 12vmin;
  left: -7vmin;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 20;
  transform-origin: bottom center;
  transform: rotate(-48deg) rotateY(40deg);
}
.flower__grass--1 {
  -webkit-animation: moving-grass 2s linear infinite;
  animation: moving-grass 2s linear infinite;
}
.flower__grass--2 {
  left: 2vmin;
  bottom: 10vmin;
  transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
  opacity: 0.8;
  z-index: 0;
  -webkit-animation: moving-grass--2 1.5s linear infinite;
  animation: moving-grass--2 1.5s linear infinite;
}
.flower__grass--top {
  width: 7vmin;
  height: 10vmin;
  border-top-right-radius: 100%;
  border-right: var(--line-w) solid var(--c);
  transform-origin: bottom center;
  transform: rotate(-2deg);
}
.flower__grass--bottom {
  margin-top: -2px;
  width: var(--line-w);
  height: 25vmin;
  background-image: linear-gradient(to top, transparent, var(--c));
}
.flower__grass__leaf {
  --size: 10vmin;
  position: absolute;
  width: calc(var(--size) * 2.1);
  height: var(--size);
  border-top-left-radius: var(--size);
  border-top-right-radius: var(--size);
  background-image: linear-gradient(
    to top,
    transparent,
    transparent 30%,
    var(--c)
  );
  z-index: 100;
}
.flower__grass__leaf--1 {
  top: -6%;
  left: 30%;
  --size: 6vmin;
  transform: rotate(-20deg);
  -webkit-animation: growing-grass-ans--1 2s 2.6s backwards;
  animation: growing-grass-ans--1 2s 2.6s backwards;
}
@-webkit-keyframes growing-grass-ans--1 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-20deg) scale(0);
  }
}
@keyframes growing-grass-ans--1 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-20deg) scale(0);
  }
}
.flower__grass__leaf--2 {
  top: -5%;
  left: -110%;
  --size: 6vmin;
  transform: rotate(10deg);
  -webkit-animation: growing-grass-ans--2 2s 2.4s linear backwards;
  animation: growing-grass-ans--2 2s 2.4s linear backwards;
}
@-webkit-keyframes growing-grass-ans--2 {
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
}
@keyframes growing-grass-ans--2 {
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
}
.flower__grass__leaf--3 {
  top: 5%;
  left: 60%;
  --size: 8vmin;
  transform: rotate(-18deg) rotateX(-20deg);
  -webkit-animation: growing-grass-ans--3 2s 2.2s linear backwards;
  animation: growing-grass-ans--3 2s 2.2s linear backwards;
}
@-webkit-keyframes growing-grass-ans--3 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-18deg) rotateX(-20deg) scale(0);
  }
}
@keyframes growing-grass-ans--3 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-18deg) rotateX(-20deg) scale(0);
  }
}
.flower__grass__leaf--4 {
  top: 6%;
  left: -135%;
  --size: 8vmin;
  transform: rotate(2deg);
  -webkit-animation: growing-grass-ans--4 2s 2s linear backwards;
  animation: growing-grass-ans--4 2s 2s linear backwards;
}
@-webkit-keyframes growing-grass-ans--4 {
  0% {
    transform-origin: bottom right;
    transform: rotate(2deg) scale(0);
  }
}
@keyframes growing-grass-ans--4 {
  0% {
    transform-origin: bottom right;
    transform: rotate(2deg) scale(0);
  }
}
.flower__grass__leaf--5 {
  top: 20%;
  left: 60%;
  --size: 10vmin;
  transform: rotate(-24deg) rotateX(-20deg);
  -webkit-animation: growing-grass-ans--5 2s 1.8s linear backwards;
  animation: growing-grass-ans--5 2s 1.8s linear backwards;
}
@-webkit-keyframes growing-grass-ans--5 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-24deg) rotateX(-20deg) scale(0);
  }
}
@keyframes growing-grass-ans--5 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-24deg) rotateX(-20deg) scale(0);
  }
}
.flower__grass__leaf--6 {
  top: 22%;
  left: -180%;
  --size: 10vmin;
  transform: rotate(10deg);
  -webkit-animation: growing-grass-ans--6 2s 1.6s linear backwards;
  animation: growing-grass-ans--6 2s 1.6s linear backwards;
}
@-webkit-keyframes growing-grass-ans--6 {
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
}
@keyframes growing-grass-ans--6 {
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
}
.flower__grass__leaf--7 {
  top: 39%;
  left: 70%;
  --size: 10vmin;
  transform: rotate(-10deg);
  -webkit-animation: growing-grass-ans--7 2s 1.4s linear backwards;
  animation: growing-grass-ans--7 2s 1.4s linear backwards;
}
@-webkit-keyframes growing-grass-ans--7 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-10deg) scale(0);
  }
}
@keyframes growing-grass-ans--7 {
  0% {
    transform-origin: bottom left;
    transform: rotate(-10deg) scale(0);
  }
}
.flower__grass__leaf--8 {
  top: 40%;
  left: -215%;
  --size: 11vmin;
  transform: rotate(10deg);
  -webkit-animation: growing-grass-ans--8 2s 1.2s linear backwards;
  animation: growing-grass-ans--8 2s 1.2s linear backwards;
}
@-webkit-keyframes growing-grass-ans--8 {
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
}
@keyframes growing-grass-ans--8 {
  0% {
    transform-origin: bottom right;
    transform: rotate(10deg) scale(0);
  }
}
.flower__grass__overlay {
  position: absolute;
  top: -10%;
  right: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  filter: blur(1.5vmin);
  z-index: 100;
}
.flower__g-long {
  --w: 2vmin;
  --h: 6vmin;
  --c: #147a33;
  position: absolute;
  bottom: 10vmin;
  left: -3vmin;
  transform-origin: bottom center;
  transform: rotate(-30deg) rotateY(-20deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  -webkit-animation: flower-g-long-ans 3s linear infinite;
  animation: flower-g-long-ans 3s linear infinite;
}
@-webkit-keyframes flower-g-long-ans {
  0%,
  100% {
    transform: rotate(-30deg) rotateY(-20deg);
  }
  50% {
    transform: rotate(-32deg) rotateY(-20deg);
  }
}
@keyframes flower-g-long-ans {
  0%,
  100% {
    transform: rotate(-30deg) rotateY(-20deg);
  }
  50% {
    transform: rotate(-32deg) rotateY(-20deg);
  }
}
.flower__g-long__top {
  top: calc(var(--h) * -1);
  width: calc(var(--w) + 1vmin);
  height: va
