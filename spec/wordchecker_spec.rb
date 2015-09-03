require ('rspec')
require ('wordchecker')

describe('String#wordchecker') do
  it("checks a string for occurances of a supplied word and totals them") do
    expect("hi hi hi".wordchecker("hi")).to(eq(3))
  end
  it("accomodates upper and lower case matches") do
    expect("Hi HI hI hi".wordchecker("hi")).to(eq(4))
  end
  it("returns 0 if nil or a blank string are passed into the method") do
    expect("Hi HI hI hi".wordchecker(nil)).to(eq(0))
  end
end
