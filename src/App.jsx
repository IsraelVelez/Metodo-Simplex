import { useState } from 'react'
import './App.css'

function crearJson(x1obj,x2obj,x3obj,x1R1,x2R1,x3R1,x1R2,x2R2,x3R2,x1R3,x2R3,x3R3,bR1,bR2,bR3){

  listaC = [];
  listaA_ub = [];
  listaA_eq = [];
  listaB_ub = [];
  listaB_eq = [];

  const datos = {
    c: listaC,
    A_ub: listaA_ub,
    A_eq: listaA_eq,
    b_ub: listaB_ub,
    b_eq: listaB_eq
  };

  const jsonDatos = JSON.stringify(datos);

  const fs = require('fs');

  fs.writeFile('datos.json', jsonDatos, 'utf8', (error) => {
    if (error) {
      console.error('Error al crear el archivo JSON:', error);
      return;
    }
    console.log('El archivo JSON ha sido creado exitosamente.');
  });

}

function App() {

  return (
  <>
    <header>
      <h1>Metodo Simplex</h1>
    </header>

    <main>
      <select>
        <option id="M"> Maximizar </option>
        <option id="mi"> Minimizar </option>
      </select>

      <h2 class="stitle">Funcion objetivo</h2>
      
      <form>
        <label>Z = </label>
        <input id="x1obj" type="text"/>
        <label>X1</label>
        <label> + </label>

        <input id="x2obj" type="text"/>
        <label>X2</label>
        <label> + </label>

        <input id="x3obj" type="text"/>
        <label>X3</label>
      </form>

      <h2 class="stitle">Restricciones</h2>

      <form>
        <input id="x1R1" type="text"/>
        <label>X1</label>
        <label> + </label>

        <input id="x2R1" type="text"/>
        <label>X2</label>
        <label> + </label>

        <input id="x3R1" type="text"/>
        <label>X3</label>

        <select>
          <option id="menorR1"> {"<="} </option>
          <option id="igualR1"> {"="} </option>
        </select>

        <input id="bR1" type="text"/>

      </form>

      <form>
        <input id="x1R2" type="text"/>
        <label>X1</label>
        <label> + </label>

        <input id="x2R2" type="text"/>
        <label>X2</label>
        <label> + </label>

        <input id="x3R2" type="text"/>
        <label>X3</label>

        <select>
          <option id="menorR2"> {"<="} </option>
          <option id="igualR2"> {"="} </option>
        </select>

        <input id="bR2" type="text"/>

      </form>

      <form>
        <input id="x1R3" type="text"/>
        <label>X1</label>
        <label> + </label>

        <input id="x2R3" type="text"/>
        <label>X2</label>
        <label> + </label>

        <input id="x3R3" type="text"/>
        <label>X3</label>

        <select>
          <option id="menorR3"> {"<="} </option>
          <option id="igualR3"> {"="} </option>
        </select>

        <input id="bR3" type="text"/>

      </form>

      <div>
        <input onClick={() => crearJson("")} id="btnSol" type="submit" class="boton" value="Solucionar"/>
      </div>
    </main>

    <footer>
      <h1>Gracias</h1>
    </footer>

  </>
  )
}

export default App
