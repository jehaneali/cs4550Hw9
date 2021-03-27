defmodule EventsApp.Users.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :name, :string
    field :password_hash, :string
    field :email, :string

    has_many :events, EventsApp.Events.Event
    has_many :comments, EventsApp.Comments.Comment

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :password_hash, :email])
    |> validate_required([:name, :password_hash, :email])
  end
end
