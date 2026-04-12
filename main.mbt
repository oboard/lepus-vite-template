///|
async fn main {
  let mut counter = 0
  println(source.to_json())
  @lepus.Window::new(title="Lepus Vite Example", source~, debug=1, plugins=[
    @webview.Plugin::new("counter", plugin => {
      plugin.command("increment", (delta : Int) => {
        counter += delta
        counter
      })
    }),
  ]).run()
}
