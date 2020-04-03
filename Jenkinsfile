pipeline {
  agent { docker { image 'node:latest' }}
  environment {
    HOME = '.'
    NPM_CONFIG_PREFIX="${pwd()}/.npm-global"
    PATH="$PATH:${pwd()}/.npm-global/bin:${pwd tmp:true}/.npm-global/bin"
  }
  stages {
    stage('test') {
      steps {
        sh 'yarn'
        sh 'yarn test'
      }
    }
  }
}
