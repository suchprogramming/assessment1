class String
  def wordchecker(word_to_check)
    (self.to_s.strip.empty? || word_to_check.to_s.strip.empty?) ? total_matches = 0 : total_matches = self.downcase.scan(word_to_check.downcase).length
  end
end
