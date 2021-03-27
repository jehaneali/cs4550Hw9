# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     EventsApp.Repo.insert!(%EventsApp.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias EventsApp.Repo
alias EventsApp.Users.User
alias EventsApp.Events.Event
alias EventsApp.Events

defmodule Inject do
  def user(name, pass, email) do
    hash = Argon2.hash_pwd_salt(pass)
    Repo.insert!(%User{name: name, password_hash: hash, email: email})
  end
end

jada = Inject.user("jada", "test1", "jada@gmail.com")
sara = Inject.user("sara", "test2", "sara@gmail.com")

Repo.insert!(%Event{user_id: sara.id, title: "Picnic", date: ~D[2021-06-15], description: "Sara is having a picnic!"})
Repo.insert!(%Event{user_id: jada.id, title: "Paint Night", date: ~D[2022-02-24], description: "Jada's hosting a paint night!"})
