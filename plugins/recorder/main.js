window.onload = () => {
  const app = document.getElementById('app');
  const recorder = Recorder(app)
  const input = document.querySelector('input')
  input.addEventListener('change', function(e){
    const file = e.target.files[0];
    // Recorder(app, {file: file})
  })
  // Recorder(app, {record: true, file: '/plugins/recorder/eric.mp3'})
  // Recorder(app, {record: false, file: '/plugins/recorder/eric.mp3'})
  // Recorder(app, {record: true})
  // Recorder(app, {file: '/plugins/recorder/eric.mp3'})
  // Recorder(app, {record: true})
}