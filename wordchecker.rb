class String
  define_method(:wordchecker) do |checker|
    totalmatches = 0
    sentence = self.scan(checker)
    sentence.each() do |word|
      if word.include?(checker)
        totalmatches = totalmatches.+(1)
      else
      end
    end
    totalmatches
  end
end