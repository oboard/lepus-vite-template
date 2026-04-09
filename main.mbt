///|
async fn main {
  @lepus.Window::new(
    title="Lepus Vite Example",
    url=frontend_url(),
    debug=1,
    plugins=[],
  ).run()
}
