const shell = require('shelljs')

shell.exec(`npm run build`)
shell.exec('git add .')
shell.exec('git commit -m "update docs"')
shell.exec('git push')
