const {spawn} = require('child_process');
const psTree = require('ps-tree');

let child;

module.exports.config = {
  specs: ['test/**/*.e2e.js', 'src/**/*.e2e.js'],
  baseUrl: `http://localhost:6006/`,
  onPrepare() {
    browser.ignoreSynchronization = true;
    child = spawn('npm', ['run', 'storybook', '--silent'], {stdio: 'inherit'});
  },

  onComplete() {
    function killSpawnProcessAndHisChildren() {
      if (!child) {
        return;
      }

      const pid = child.pid;

      psTree(pid, (err /*eslint handle-callback-err: 0*/, children) => {
        [pid].concat(children.map(p => p.PID)).forEach(tpid => {
          try {
            process.kill(tpid, 'SIGKILL');
          } catch (e) {
            //
          }
        });

        child = null;
        return;
      });
    }
    killSpawnProcessAndHisChildren();
  }
};
