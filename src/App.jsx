import { useState } from 'react'
import './App.css'

function App() {

  return (
  <>
    <header>
      <h1>Metodo Simplex</h1>
    </header>

    <main>
      <select>
        <option> Maximizar </option>
        <option> Minimizar </option>
      </select>

      <h2>Funcion objetivo</h2>
      <label>Z = </label>
      <input type="submit" class="boton" value="Agregar"/>
      <form>
        <input type="text"/>
        <label>X1</label>
        <label> + </label>

        <input type="text"/>
        <label>X2</label>
        <label> + </label>

        <input type="text"/>
        <label>X3</label>

        <label> = </label>

        <input type="text"/>
      </form>

      <h2>Restricciones</h2>

      <form>
        <input type="text"/>
        <label>X1</label>
        <label> + </label>

        <input type="text"/>
        <label>X2</label>
        <label> + </label>

        <input type="text"/>
        <label>X3</label>

        <select>
          <option> {"<="} </option>
          <option> {"="} </option>
        </select>

        <input type="text"/>

      </form>

      <form>
        <input type="text"/>
        <label>X1</label>
        <label> + </label>

        <input type="text"/>
        <label>X2</label>
        <label> + </label>

        <input type="text"/>
        <label>X3</label>

        <select>
          <option> {"<="} </option>
          <option> {"="} </option>
        </select>

        <input type="text"/>

      </form>

      <form>
        <input type="text"/>
        <label>X1</label>
        <label> + </label>

        <input type="text"/>
        <label>X2</label>
        <label> + </label>

        <input type="text"/>
        <label>X3</label>

        <select>
          <option> {"<="} </option>
          <option> {"="} </option>
        </select>

        <input type="text"/>

      </form>

      <div>
        <input type="submit" class="boton" value="Resetear"/>
        <input type="submit" class="boton" value="Agregar"/>
        <input type="submit" class="boton" value="Remover"/>
        <input type="submit" class="boton" value="Solucionar"/>
      </div>
    </main>

    <footer>
      <h1>Gracias</h1>
    </footer>

  </>
  )
}

export default App
