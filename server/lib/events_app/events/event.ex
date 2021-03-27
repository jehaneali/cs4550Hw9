defmodule EventsApp.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :date, :date
    field :description, :string
    field :title, :string
    belongs_to :user, EventsApp.Users.User

    has_many :invites, EventsApp.Invites.Invite
    has_many :comments, EventsApp.Comments.Comment

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:title, :date, :description, :user_id])
    |> validate_required([:title, :date, :description, :user_id])
  end
end
