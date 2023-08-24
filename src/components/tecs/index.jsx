import { Container } from "./styles"
import React, { useEffect, useState } from 'react';
const ProgressBar = require('./progressbar.min.js')

export function Tecs () {
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
      const containerA = document.getElementById('circleA');
      const containerB = document.getElementById('circleB');
      const containerC = document.getElementById('circleC');
      const containerD = document.getElementById('circleD');
  
      const circleA = new ProgressBar.Circle(containerA, {
        color: '#d87a69',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#d87a69' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = String(Math.round(circle.value() * 100));
            circle.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');
        },
      });
  
      const circleB = new ProgressBar.Circle(containerB, {
        color: '#d87a69',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#d87a69' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = String(Math.round(circle.value() * 100));
            circle.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');
        },
      });
  
      const circleC = new ProgressBar.Circle(containerC, {
        color: '#d87a69',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#d87a69' },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            var value = String(Math.round(circle.value() * 100));
            circle.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');
        },
      });
  
      const circleD = new ProgressBar.Circle(containerD, {
        color: '#d87a69',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#aaa' },
        to: { color: '#d87a69' },
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          var value = String(Math.round(circle.value() * 100));
          circle.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');
        },
      });
  
      const dataAreaOffset = document.getElementById('data-area').offsetTop;
  
      const handleScroll = () => {
        const scroll = window.scrollY;
        if (scroll > dataAreaOffset - 500 && !animationStarted) {
          circleA.animate(1.0);
          circleB.animate(1.0);
          circleC.animate(1.0);
          circleD.animate(1.0);
          setAnimationStarted(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [animationStarted]);
    return (
        <Container>
<div id="data-area">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-xs-6 circle-box">
              <div id="circleA"></div>
              <p>React.js</p>
            </div>
            <div class="col-md-3 col-xs-6 circle-box">
              <div id="circleB"></div>
              <p>Next.js</p>
            </div>
            <div class="col-md-3 col-xs-6 circle-box">
              <div id="circleC"></div>
              <p>Javascript</p>
            </div>  
            <div class="col-md-3 col-xs-6 circle-box">
              <div id="circleD"></div>
              <p>Node.js</p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>        </Container>
    )
}