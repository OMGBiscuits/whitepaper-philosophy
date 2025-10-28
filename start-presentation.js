const { spawn } = require('child_process');
const os = require('os');

// Start the reveal-md server
const server = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Wait for server to start, then open browser
setTimeout(() => {
  const platform = os.platform();
  let command;
  
  if (platform === 'win32') {
    command = 'start';
  } else if (platform === 'darwin') {
    command = 'open';
  } else {
    command = 'xdg-open';
  }
  
  spawn(command, ['http://localhost:1948'], { shell: true });
}, 3000);

server.on('close', (code) => {
  process.exit(code);
});

