require('sinatra')
require('sinatra/reloader')
require ('dogeify/all')
require('./lib/wordchecker')

get('/') do
  erb(:form)
end

get('/error') do
  erb(:error)
end

get('/results') do
  @user_sentence = params.fetch('user_sentence')
  @word_to_check = params.fetch('word_to_check')
  @doge_user = @user_sentence.dogeify()
  @word_check_total = @user_sentence.wordchecker(@word_to_check)
  erb(:results)
end
