require('yoshi-helpers/require-hooks').setupRequireHooks();
require('yoshi-runtime').wixCssModulesRequireHook('./src');
require('@stylable/node').attachHook();
