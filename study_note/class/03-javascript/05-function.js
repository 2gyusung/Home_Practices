let auth = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("target").innerText = token;
  document.getElementById('target').style.color = '#' + token
};


let auth2 = ()  => {
  const token2 = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")

}


let a = () => {
  const token3 = String(Math.floor(Math.random() * 100000)).padStart(6, '0')
  document.getElementById('target').innerText = token3;
  document.getElementById('target').style.color = '#' + token3
}

let v = () => {
  const token35 = String(Math.floor(Math.random() * 100000)).padStart(6 , '0')
  document.getElementById('target').innerHTML = token3;
  document.getElementById('target').style.color = '#' + token3
}