
let htmlContent = `
<div class="container">
    <div class="card">
      <h1 class='title' id='first-title'>First <span>span</span> Title</h1>
      <h1 class='title' id='second-title'>Second Title</h1>
      <h1 class='title' id='third-title'>Third Title</h1>
      <h1></h1>
    </div>
    <div class="card">
      <form action="mailto:contact@yourdomain.com" method="POST" enctype="multipart/form-data" name="EmailForm">
        <input class="search" title="secr" value="123" id="search" name="Contact-Message"> </input>
        <h4>HEADLINE</h4>
        <span id="btn" class="first" title="buttun" >Click me!</span>
        <ul id="list">
          <li><a href="index.html">Number One</a></li>
          <li><a href="index.html">Number Two</a></li>
          <li><a href="index.html">Number Three</a></li>
          <li><a href="index.html">Number Four</a></li>
        </ul>
        <button type="submit" value="Submit">Send</button>
      </form>
      <img id="img" src="" benimAttribue="ff" >
    </div>
  </div>
`
console.log(document.createElement("p"))

//document.body.appendChild(document.createElement("p"))
//document.body.appendChild(htmlContent)
document.body.innerHTML = htmlContent