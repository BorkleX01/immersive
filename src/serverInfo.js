var serverString;
process.env.NODE_ENV === 'development' ? serverString="http://localhost/immersive" : serverString = window.location.protocol+"//"+window.location.host;
export {serverString}
