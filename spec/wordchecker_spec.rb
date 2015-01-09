require ('rspec')
require ('wordchecker')

describe('String#wordchecker') do
  it("checks a string for occurances of a supplied word and totals them") do
    expect("hihihi".wordchecker("hi")).to(eq(3))
  end
  it("makes sure the user actually enters info") do
    expect("".wordchecker("hi")).to(eq(0))
  end
end
