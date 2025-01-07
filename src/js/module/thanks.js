export function toTopback(){
  if (window.location.pathname === '/contact/thanks/') {
    setTimeout(function(){
      window.location.href = '/';
    }, 5*1000);
  }
}