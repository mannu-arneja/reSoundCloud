# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_usr = User.new(
    username: "Guest",
    email: "demo@nyc.edu",
    password: 'hunter2',
    gender: 'F',
    age: '99',
    location: 'New York, New York',
    bio: 'Just visiting'
)
demo_usr.save!