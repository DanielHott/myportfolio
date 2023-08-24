import { Container } from "./styles"
import React, { useEffect, useState } from 'react';
const ProgressBar = require('./progressbar.min.js')

export function Tecs () {
   return(
        <Container>
 <div id="about-area">
        <div class="container">
            <div class="row">
              <div  id="content">
                <div id="titles">
                <h3 class="about-title">Stacks de Domínio:</h3>
                <p>Já trabalhei com diversas tecnologias, e estou aberto a aprender quantas precisar.</p>
                <p>Meus diferenciais:</p>
                </div>
                <div></div>
                <ul id="about-list">
                  <li><i class="fas fa-check"></i> React.js</li>
                  <li><i class="fas fa-check"></i> Node.js</li>
                  <li><i class="fas fa-check"></i> Next.js</li>
                  <li><i class="fas fa-check"></i> Javascript</li>
                  <li><i class="fas fa-check"></i> Django</li>
                  <li><i class="fas fa-check"></i> Python</li>
                  <li><i class="fas fa-check"></i> GraphQl</li>
                  <li><i class="fas fa-check"></i> MySql</li>
                  <li><i class="fas fa-check"></i> Postgres</li>
                  <li><i class="fas fa-check"></i> SoftSkills</li>
                  <li><i class="fas fa-check"></i> Aprender a aprender</li>


                </ul>
              </div>
            </div>
          </div>
      </div>     </Container>
    )
}