defmodule EventsAppWeb.SessionController do
  use EventsAppWeb, :controller

  def create(conn, %{"name" => name, "password" => password}) do
    user = EventsApp.Users.get_user_by_name!(name)

    sess = %{
      user_id: user.id,
      name: user.name,
      token: Phoenix.Token.sign(conn, "user_id", user.id)
    }
    conn
    |> put_resp_header("content-type", "application/json; charset=UTF-8")
    |> send_resp(:created, Jason.encode!(sess))
  end
end
