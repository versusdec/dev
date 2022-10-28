window.onload = () => {
  const app = document.getElementById('app');
  const heroku = 'https://morning-gorge-70271.herokuapp.com/'
  // const recorder = Recorder(app, {file: 'eric.mp3'})
  Recorder(app, {record: true, file: '/plugins/recorder/eric.mp3'})
  // Recorder(app, {record: true, file: 'https://versusdec.github.io/eric.mp3'})
  
}