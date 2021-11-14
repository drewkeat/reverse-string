def reverse_string(str)
  # type your code in here
  arr = str.split("")
  result = []
  arr.each {|letter| result.unshift(letter)}
  result.join("")
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
  puts
  puts "Expecting: 'olleh'"
  puts "=>", reverse_string('hello')
end

# Please add your pseudocode to this file
# And a written explanation of your solution