import React from 'react';
import aguspng from './assets/agus.png';
import './App.css';

function App() {
  return (
<div className="text-base font-sans bg-gray-100 p-8">

<div className="grid grid-cols-3 gap-4">
  
  <div className="section p-8 max-w-2xl">


    <div className="p-8">
      <img className="rounded-full border-2 border-black" alt="Picture" src={aguspng} />
    </div>

    <p className="text-xl font-semibold" >Agustín Javier Orlando </p>

    <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-large w3-text-teal"></i>25 years old</p>
    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Córdoba - Argentina</p>
    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>agusavior@gmail.com</p>
    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+5493512442259</p>
    <p><i className="fa fa-telegram fa-fw w3-margin-right w3-large w3-text-teal"></i>@agusavior</p>
    <p><i className="fa fa-whatsapp fa-fw w3-margin-right w3-large w3-text-teal"></i>+5493512442259</p>
    <hr/>

    <div className="w3-container w3-padding-16 w3-center w3-opacity w3-xlarge">
      <i className="fa rp-16 fa-facebook-official w3-hover-opacity"></i>
      <i className="fa fa-instagram w3-hover-opacity"></i>
      <i className="fa fa-snapchat w3-hover-opacity"></i>
      <i className="fa fa-pinterest-p w3-hover-opacity"></i>
      <i className="fa fa-twitter w3-hover-opacity"></i>
      <i className="fa fa-linkedin w3-hover-opacity"></i>
    </div>

    

  </div>

  <div className="section col-span-2 ">


<h1 >Hola </h1>

<blockquote className="text-lg font-semibold p-4 space-y-4">
  <p className="text-lg font-semibold">
    “Tailwind CSS is the only framework that I've seen scale
    on large teams. It’s easy to customize, adapts to any design,
    and the build size is tiny.”
  </p>
</blockquote>

<p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
  <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
</p>

<p>
  AGUSAVIOR setup:
  <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
  +
  <a
    href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
    target="_blank"
  >Vetur</a>
  +
  <a
    href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features"
    target="_blank"
  >Vue DX</a>
</p>
<p>
  Make sure to use workspace version of TypeScript to get improved support via
  <a
    href="https://github.com/znck/vue-developer-experience"
    target="_blank"
  >@vuedx</a>.
  <br />Note @vuedx is still experimental and this setup is provided for early feedback.
</p>

<p>
  Edit
  <code>components/HelloWorld.vue</code> to test hot module replacement.
</p>  
    
  </div>
  
</div>


</div>

  );
}

export default App;
