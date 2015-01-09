require ('rspec')
require ('wordchecker')

describe('String#wordchecker') do

  it("checks a string for occurances of a supplied word and totals them") do
    expect("hihihi".wordchecker("hi")).to(eq(3))
  end
end
