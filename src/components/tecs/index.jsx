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
  
      const bar = new ProgressBar.Line(containerA, {
        strokeWidth: 20,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffffff',
        trailColor: '#ffffff',
        trailWidth: 2,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#ffffff'},
        to: {color: '#000000'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          var value = String(Math.round(bar.value() * 100));
          bar.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');        }
      });
        
      const barB = new ProgressBar.Line(containerB, {
        strokeWidth: 20,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffffff',
        trailColor: '#ffffff',
        trailWidth: 2,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#ffffff'},
        to: {color: '#000000'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          var value = String(Math.round(bar.value() * 100));
          bar.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');        }
      });
  
      const barC = new ProgressBar.Line(containerC, {
        strokeWidth: 20,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffffff',
        trailColor: '#ffffff',
        trailWidth: 2,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#ffffff'},
        to: {color: '#000000'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          var value = String(Math.round(bar.value() * 100));
          bar.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');        }
      });
  
      const barD = new ProgressBar.Line(containerD, {
        strokeWidth: 20,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffffff',
        trailColor: '#ffffff',
        borderRadius: '10px',
        trailWidth: 2,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#ffffff'},
        to: {color: '#000000'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
          var value = String(Math.round(bar.value() * 100));
          bar.setText(Number(value) < 100 ? value.replace(/0/, '') : value + '%');        }
      });
  
      const dataAreaOffset = document.getElementById('data-area').offsetTop;
  
      const handleScroll = () => {
        const scroll = window.scrollY;
        if (scroll > dataAreaOffset - 500 && !animationStarted) {
          bar.animate(1.0); 
          barB.animate(1.0);
          barC.animate(1.0);
          barD.animate(1.0);
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
              <div id="circleA">

              </div>
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