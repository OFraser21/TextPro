9.times do |i|
  TextMessage.create(
    name: "Name #{i+1}",
    phoneNumber: "012345678 #{i+1}",
    message: "Test Message #{i+1}",
    timeStamp: DateTime.now()
  )
end
