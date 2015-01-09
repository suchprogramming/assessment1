require('sinatra')
require('sinatra/reloader')
require('./lib/wordchecker')

get('/') do
  "Hello!"
end

get('/form') do
  erb(:form)
end

get('/error') do
  erb(:error)
end

get('/results') do
  @user_sentence = params.fetch('user_sentence')
  @word_to_check = params.fetch('word_to_check')
  @word_check_total = @user_sentence.wordchecker(@word_to_check)
  if @word_to_check.eql?("") or @user_sentence.eql?("")
    redirect "/error"
  end
  erb(:results)
end
