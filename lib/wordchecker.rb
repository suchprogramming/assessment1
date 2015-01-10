class String
  define_method(:wordchecker) do |word_to_check|
    total_matches = 0
    user_sentence = self.scan(word_to_check)
      user_sentence.each() do |user_sentence_element|
        if user_sentence_element.eql?("") or word_to_check.eql?("")
          total_matches = 0
        elsif
          user_sentence_element.include?(word_to_check)
          total_matches = total_matches.+(1)
        else
        end
      end
    total_matches
  end
end
