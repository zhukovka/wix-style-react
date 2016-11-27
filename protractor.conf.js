const {spawn} = require('child_process');
const psTree = require('ps-tree');
try{
  //Private wix applitools key
  require('wix-eyes-env');
} catch(e) {
  //skip wix' key for applitools
  //In case you want to use applitools & eyes.it (https://github.com/wix/eyes.it),
  //please use your own key
}

let child;

module.exports.config = {
  specs: ['test/**/*.e2e.js'],
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
